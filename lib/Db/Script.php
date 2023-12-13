<?php

namespace OCA\FilesScripts\Db;

use JsonSerializable;
use OCP\AppFramework\Db\Entity;

/**
 * @method setTitle(string $title)
 * @method string getTitle()
 * @method setDescription(string $description)
 * @method string getDescription()
 * @method setProgram(string $program)
 * @method string getProgram()
 * @method setEnabled(int $enabled)
 * @method int getEnabled()
 * @method setLimitGroups(string $groups)
 * @method string getLimitGroups()
 * @method setPublic(int $public)
 * @method int getPublic()
 * @method setMimetype(string $mimetypes)
 * @method string getMimetype()
 * @method setMimetypes(?string $mimetypes)
 * @method string getMimetypes()
 */
class Script extends Entity implements JsonSerializable {
	protected ?string $title = null;
	protected ?string $description = null;
	protected ?string $program = null;
	protected ?int $enabled = null;
	protected ?string $limitGroups = null;
	protected ?int $public = null;
	protected ?string $mimetypes = null;
	protected ?string $mimetype = null; // TODO remove mimetype property and drop column from db

	public function setLimitGroupsArray(array $groupsArray): void {
		$groups = implode(",", $groupsArray) ?: '';
		$this->setLimitGroups($groups);
	}

	public function getLimitGroupsArray(): array {
		return array_filter(explode(",", $this->limitGroups) ?: []);
	}
	public function setMimetypesArray(array $mimetypesArray): void {
		$mimetypes = implode(",", $mimetypesArray) ?: '';
		$this->setMimetypes($mimetypes);
	}

	public function getMimetypesArray(): array {
		if (!$this->mimetypes) {
			return [];
		}
		return array_filter(explode(",", $this->mimetypes) ?: []);
	}

	public static function newFromJson(array $jsonData): Script {
		$script = new Script();
		$script->setTitle($jsonData["title"] ?? "");
		$script->setDescription($jsonData["description"] ?? "");
		$script->setProgram($jsonData["program"] ?? "");
		$script->setMimetype($jsonData["mimetype"] ?? "");

		$enabled = $jsonData["enabled"] ?? 0;
		$enabled = is_integer($enabled) ? $enabled : 0;
		$script->setEnabled($enabled);

		$public = $jsonData["public"] ?? 0;
		if (!is_integer($public)) {
			$public = 0;
		}
		$script->setPublic($public);


		return $script;
	}

	public function jsonSerialize(): array {
		return [
			'id' => $this->id,
			'title' => $this->title,
			'description' => $this->description,
			'program' => $this->program,
			'enabled' => $this->enabled,
			'limitGroups' => $this->getLimitGroupsArray(),
			'public' => $this->public,
			'mimetypes' => $this->getMimetypesArray()
		];
	}
}
