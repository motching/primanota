<?php

namespace AttilaBlog\Controller;
use AttilaBlog\View\Template;

class ErrorController extends AbstractController {

    public function doNotFound($url){
               $view = new Template('error/NotFound');
               return $view->render();
           }
}