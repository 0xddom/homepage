<?php

class SearchProviderBuilder {
    private $provider;

    public function __construct() {
        $this->provider = new SearchProvider();
    }

    public function setMethod($method) {
        $this->provider->setMethod($method);
        return $this;
    }

    public function setAction($action) {
        $this->provider->setAction($action);
        return $this;
    }

    public function setName($name) {
        $this->provider->setName($name);
        return $this;
    }

    public function setParam($param) {
        $this->provider->setParam($param);
        return $this;
    }

    public function setPlaceholder($placeholder) {
        $this->provider->setPlaceholder($placeholder);
        return $this;
    }

    public function isAutofocus($is_autofocus) {
        $this->provider->setIsAutofocus($is_autofocus);
        return $this;
    }

    public function build() {
        return $this->provider;
    }
}

class SearchProvider {

    private $method;
    private $action;
    private $name;
    private $param;
    private $placeholder;
    private $is_autofocus;

    public function setMethod($method) {
        $this->method = $method;
    }

    public function getMethod() {
        return $this->method;
    }

    public function setAction($action) {
        $this->action = $action;
    }

    public function getAction() {
        return $this->action;
    }

    public function setName($name) {
        $this->name = $name;
    }

    public function getName() {
        return $this->name;
    }

    public function setParam($param) {
        $this->param = $param;
    }

    public function getParam() {
        return $this->param;
    }

    public function setPlaceholder($placeholder) {
        $this->placeholder = $placeholder;
    }

    public function getPlaceholder() {
        return $this->placeholder;
    }

    public function setIsAutofocus($is_autofocus) {
        $this->is_autofocus = $is_autofocus;
    }

    public function isAutofocus() {
        return $this->is_autofocus;
    }

    //    private static function duckduckgo() {
    //   return (new SearchProviderBuilder())
    //  ->setMethod('get')
    //  ->setAction('https://next.duckduckgo.com')
    //  ->setName('duckduckgo')
    //  ->setParam('q')
    //  ->setPlaceholder('DuckDuck Go')
    //  ->isAutofocus(true)
    //  ->build();
    //}

    //    private static $providers = array(
    //  self::duckduckgo;


    //    public static function all() {
    //  return self::$providers;
    //}
}

//print_r(SearchProvider::all());

?>