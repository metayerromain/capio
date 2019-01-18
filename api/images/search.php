<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
 
// include database and object files
include_once '../config/core.php';
include_once '../config/database.php';
include_once '../objects/images.php';
 
// instantiate database and images object
$database = new Database();
$db = $database->getConnection();
 
// initialize object
$images = new Images($db);
 
// get keywords
$keywords=isset($_GET["s"]) ? $_GET["s"] : "";
 
// query images
$stmt = $images->search($keywords);
$num = $stmt->rowCount();
 
// check if more than 0 record found
if($num>0){
 
    // images array
    $images=array();
    $images_arr["records"]=array();
 
    // retrieve our table contents
    // fetch() is faster than fetchAll()
    // http://stackoverflow.com/questions/2770630/pdofetchall-vs-pdofetch-in-a-loop
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extract row
        // this will make $row['name'] to
        // just $name only
        extract($row);
 
        $images_item=array(
            "id" => $id,
            "img" => $img
        );
 
        array_push($images_arr["records"], $images_item);
    }
 
    // set response code - 200 OK
    http_response_code(200);
 
    // show images data
    echo json_encode($images_arr);
}
 
else{
    // set response code - 404 Not found
    http_response_code(404);
 
    // tell the user no images found
    echo json_encode(
        array("message" => "No images found.")
    );
}
?>