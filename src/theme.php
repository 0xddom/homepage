<?php

class Theme {
    private $lat = 40.4165000;
    private $lon = -3.7025600;
    private $mode = SUNFUNCS_RET_TIMESTAMP;
    private $zenit = 90;
    private $gmt = 1;

    function get_sunrise($time) {
        return date_sunrise($time,
                            $this->mode,
                            $this->lat,
                            $this->lon,
                            $this->zenit,
                            $this->gmt);
    }

    function get_sunset($time) {
        return date_sunset($time,
                           $this->mode,
                           $this->lat,
                           $this->lon,
                           $this->zenit,
                           $this->gmt);

    }

    function set_theme_from_get() {
        $files = array_diff(scandir('./css'), array('.', '..', 'common.css'));

        $requested_theme = $_GET['theme'].'.css';
        $css; // Global css theme

        if(in_array($requested_theme, $files)) {
            return $_GET['theme'];
        } else {
            return $this->set_theme_from_daylight();
        }
    }

    function is_night($time, $sunset) {
        return $sunset <= $time/* && $time < $sunrise*/;
    }

    function set_theme_from_daylight() {
        $css =  "light";
        $time = getdate()[0];

        if($this->is_night($time, $this->get_sunset($time)))
            $css = 'dark';

        return $css;
    }

    public function set_theme() {

        if(defined(_GET['theme'])) {
            return $this->set_theme_from_get();
        } else {
            return $this->set_theme_from_daylight();
        }
    }
}

?>