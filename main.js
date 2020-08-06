var fnGetArticleSectionByNavLink = function(oLink){
    return document.getElementById(oLink.id.split("_")[2]);
};

var fnHideArticle = function(oArticle){
    oArticle.classList.add("hidden");
    oArticle.classList.remove("visible");
};

var fnShowArticle = function(oArticle){
    if(oArticle){
        oArticle.classList.remove("hidden");
        oArticle.classList.add("visible");
    }
};

var fnHideAllArticle = function(oVisibleArticle){
    Array.from(document.getElementsByTagName("article")).filter(a => a.id !== oVisibleArticle.id).forEach(a => fnHideArticle(a));
};

var fnOnNavLinkPressed = function(oEvent){
    var oArticle = fnGetArticleSectionByNavLink(oEvent.srcElement);
    fnShowArticle(oArticle);
    fnHideAllArticle(oArticle);
};

var fnGetAnchor = function() {
    return (document.URL.split('#').length > 1) ? document.URL.split('#')[1] : null;
};

function onStart () {
    document.getElementsByName("nav_link").forEach(n => n.onclick = fnOnNavLinkPressed);
    fnShowArticle(document.getElementById(fnGetAnchor()));
};