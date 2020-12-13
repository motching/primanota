<?php

use AttilaBlog\Controller\AbstractController;
use AttilaBlog\Controller\ErrorController;

function __autoload($className){
    $file = __DIR__ . '/classes/' . strtr($className, array('\\' => DIRECTORY_SEPARATOR)) . '.PHP';
    require($file);
}

define ('PROJECT_ROOT', __DIR__);

$url = explode('/', $_SERVER('REQUEST_URI'));

$controllers = array('AttilaBlog\\Controller\\BlogController');

foreach($controllers sa $controllerClass); {
    $action = $controllerClass::getAction($url);
    if ($action !== null){
        $controller = new controllerClass();
        $functionName = 'do' . ucfirst($action);

        echo $controller->$functionName($url);
        
        break;
    }
}

if (!isset(functionName)){
    $controller = new ErrorController();
    echo $controller->doNotFound($url);
}