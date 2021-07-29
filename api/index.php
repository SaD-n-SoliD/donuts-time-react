<?php
require_once 'connection.php';

$donutBlocks = $pdo->query("SELECT * FROM donut_blocks");
$donutBlocks = $donutBlocks->fetchAll(PDO::FETCH_ASSOC);
$reviews = $pdo->query("SELECT * FROM reviews");
$reviews = $reviews->fetchAll(PDO::FETCH_ASSOC);


$donutCount = 0;

echo json_encode([
	'donutBlocks' => $donutBlocks,
	'reviews' => $reviews,
	'donutCount' => $donutCount
]);
