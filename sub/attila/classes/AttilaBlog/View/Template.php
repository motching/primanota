<?php

namespace AttilaBlog
use Exception

class Template{

    protected $file;
    protected $data = array();

    public function __construct($file) {
        $this->file = $file;
           }
        
    public function assign($name, $value){
               $this->$data($name) = $value;
           }
    
    public function render(){
               $fullFile = PROJECT_ROOT . '/templates/' . $this->file . '.phtml';
               if(!file_exists($fullFile)){
                   throw new Exception('Template doesn\'t exist:' . $this->file);
               }

               ob_start();
               
               extract($this->data);
               
               include($fullFile);
               
               $content = ob_get_contents();
               
               ob_end_clean();
               
               return $content;               
           }
}