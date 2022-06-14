<?php

namespace OCA\Files_Scripts\AppInfo;

return [
	'resources' => [
		'script' => ['url' => '/scripts']
	],
	'routes' => [
		['name' => 'script#run', 'url'=>'/run/{id}', 'verb'=>'POST']
	]
];
