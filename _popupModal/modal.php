<?php

require_once($_SERVER["DOCUMENT_ROOT"]."/monkcms.php");

header('Content-Type: application/json');

$section = getContent(
	"section",
	"display:detail",
	"find:popup-modal-section",
	"json"
);

echo json_encode($section['show']);