import React from "react";
import Helmet from "react-helmet";

const PureBlog = (props) => {
    return (
            <Helmet
                style={[
                  {
                      type: "text/css",
                      cssText: '#layout,.nav-list{padding:0}.brand-title,.content-subhead,.nav-item a{text-transform:uppercase}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}a{text-decoration:none;color:#3d92c9}a:focus,a:hover{text-decoration:underline}h3{font-weight:100}.pure-img-responsive{max-width:100%;height:auto}.header{text-align:center;top:auto;margin:3em auto}.sidebar{background:#3d4f5d;color:#fff}.brand-tagline,.brand-title{margin:0}.brand-tagline{font-weight:300;color:#b0cadb}.nav-list{margin:0;list-style:none}.nav-item{display:inline-block;zoom:1}.nav-item a{background:0 0;border:2px solid #b0cadb;color:#fff;margin-top:1em;letter-spacing:.05em;font-size:85%}.nav-item a:focus,.nav-item a:hover{border:2px solid #3d92c9;text-decoration:none}.content-subhead{color:#aaa;border-bottom:1px solid #eee;padding:.4em 0;font-size:80%;font-weight:500;letter-spacing:.1em}.content{padding:2em 1em 0}.post{padding-bottom:2em}.post-title{font-size:2em;color:#222;margin-bottom:.2em}.post-avatar{border-radius:50px;float:right;margin-left:1em}.post-description{font-family:Georgia,Cambria,serif;color:#444;line-height:1.8em}.post-meta{color:#999;font-size:90%;margin:0}.post-category{margin:0 .1em;padding:.3em 1em;color:#fff;background:#999;font-size:80%}.post-category-design{background:#5aba59}.post-category-pure{background:#4d85d1}.post-category-yui{background:#8156a7}.post-category-js{background:#df2d4f}.post-images{margin:1em 0}.post-image-meta{margin-top:-3.5em;margin-left:1em;color:#fff;text-shadow:0 1px 1px #333}.footer{padding:1em 0}.footer a{color:#ccc;font-size:80%}.footer .pure-menu a:focus,.footer .pure-menu a:hover{background:0 0}@media (min-width:48em){.content{padding:2em 3em 0;margin-left:25%}.header{margin:80% 2em 0;text-align:right}.sidebar{position:fixed;top:0;bottom:0}.footer{text-align:center}}'}
                ]}
            />
    );
}

module.exports = PureBlog