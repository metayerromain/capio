<?php
class Content{

// database connection and table name
private $conn;
private $table_name = "content";

// object properties
public $id;
public $title;
public $description;

public function __construct($db){
    $this->conn = $db;
}

// used by select drop-down list
public function readAll(){
    //select all data
    $query = "SELECT * FROM `images`";

    $stmt = $this->conn->prepare( $query );
    $stmt->execute();

    return $stmt;
}
    // used by select drop-down list
public function read(){
 
    //select all data
    $query = "SELECT * FROM `images`";
 
    $stmt = $this->conn->prepare( $query );
    $stmt->execute();
 
    return $stmt;
}
// create content
function create(){
 
    // query to insert record
    $query = "INSERT INTO
                `images`
            SET
                id=:id, title=:title, description=:description";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->title=htmlspecialchars(strip_tags($this->title));
    $this->description=htmlspecialchars(strip_tags($this->description));
    
    // bind values
    $stmt->bindParam(":id", $this->id);
    $stmt->bindParam(":title", $this->title);
    $stmt->bindParam(":description", $this->description);
    // execute query
    if($stmt->execute()){
        return true;
    }
 
    return false;
     
}
// used when filling up the update content form
function readOne(){
 
    // query to read single record
    $query = "SELECT * FROM `images`
            WHERE
                id = ?
            LIMIT
                0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of content to be updated
    $stmt->bindParam(1, $this->id);
 
    // execute query
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->id = $row['id'];
    $this->title = $row['title'];
    $this->description = $row['description'];
}
// update the product
function update(){
 
    // update query
    $query = "UPDATE
               `images`
            SET
                id = :id,
                title = :title,
                description = :description
            WHERE
                id = :id";
 
    // prepare query statement
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->id=htmlspecialchars(strip_tags($this->id));
    $this->title=htmlspecialchars(strip_tags($this->title));
    $this->description=htmlspecialchars(strip_tags($this->description));
    
    // bind new values
    $stmt->bindParam(':id', $this->id);
    $stmt->bindParam(':title', $this->title);
    $stmt->bindParam(':description', $this->description);
    
    // execute the query
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
// delete the product
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
// search products
function search($keywords){
 
    // select all query
    $query = "SELECT
                `images`
                
            WHERE
                id LIKE ? OR description LIKE ? OR id LIKE ?";
 
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
