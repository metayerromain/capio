<?php
// Afficher les erreurs à l'écran
ini_set('display_errors', 1);
// Enregistrer les erreurs dans un fichier de log
ini_set('log_errors', 1);
// Afficher les erreurs et les avertissements
// error_reporting(e_all);
class Images {
 
    // database connection and table name
    private $conn;
    private $table_name = "images";
 
    // object properties
    public $id;
    public $img;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    // read products
function read(){
 
    // select all query
    $query = "SELECT * FROM `images`";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
// create images
function create(){
 
    // query to insert record
    $query = "INSERT INTO `images`   
            SET
                id=:id, img=:img";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->img=htmlspecialchars(strip_tags($this->img));
    
    // bind values
    $stmt->bindParam(":id", $this->id);
    $stmt->bindParam(":img", $this->img);
    
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false; 
}
// used when filling up the update images form
function readOne(){
 
    // query to read single record
    $query = "SELECT * FROM `images`
            WHERE
                id = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->id = $row['id'];
    $this->img = $row['img'];
}
// update the images
function update(){
 
    // update query
    $query = "UPDATE
                `images`
            SET
                id = :id,
                img = :img
            WHERE
                id = :id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->img=htmlspecialchars(strip_tags($this->img));
 
    // bind new values
    $stmt->bindParam(':id', $this->id);
    $stmt->bindParam(':img', $this->img);
 
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
// delete the images
function delete(){
 
    // delete query
    $query = "DELETE FROM `images` WHERE id = ?";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
 
    // bind id of record to delete
    $stmt->bindParam(1, $this->id);
 
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// search images
function search($keywords){
 
    // select all query
    $query = "SELECT * FROM `images`";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $keywords=htmlspecialchars(strip_tags($keywords));
    $keywords = "%{$keywords}%";
 
    // bind
    $stmt->bindParam(1, $keywords);
    $stmt->bindParam(2, $keywords);
    $stmt->bindParam(3, $keywords);
 
    // execute query
    $stmt->execute();
 
    return $stmt;
}
}