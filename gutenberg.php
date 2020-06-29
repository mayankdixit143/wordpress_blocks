<?php


function mayank_gutenberg_blocks(){
    wp_register_script('custom-cta-js', get_template_directory_uri() . '/build/index.js',array('wp-blocks','wp-editor','wp-components'));

    register_block_type('mayank/custom-cta',array(
        'editor_script' =>'custom-cta-js'
    ));
};

add_action('init','mayank_gutenberg_blocks');