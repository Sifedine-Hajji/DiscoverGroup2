# DiscoverGroup2

Discovery of propreties (css,...)

- Eloise: Details&summary, text-decorations(all),current
- Pierre: Progress, clip-path, border-image,clamp
- Sifedine:Datalist, caret-color/caret-shape, hyphens, :dir

# Eloise

[lien vers la Démo](http://cepegra-labs.be/webdesign/fed2021/eloise/csshtml/21-discovery/)

## HTML TAGS

### **&#60;details&#62; & &#60;summary&#62;**

- **description &#60;details&#62;:** est un outil qui permet de reveler une information
- **description &#60;summary&#62;:** est utilisé avec la balise juste au dessus et permet de fournir un titre ou un résumé à l'information révélé Ces deux balises sont utilisables sur la plupart des navigateurs, à part IE et Opera Mini
  Lorsque l'utilisateur appuie sur la petite flèche, il dévoile son contenu, c'est pourquoi, on peut utiliser attribut [open]

## CSS PROPERTIES

### **text-decoration-line**

- **description:** permet de décorer le texte, plus souvent utilisé sous la forme "text-decoration"

### **text-decoration-style**

- **description:** permet de définir le style de la décoration (wavy,...)
  lorsqu'on définit la décoration "souligné" au texte (text-decoration-line : underline)

### **text-decoration-color**

- **description:** permet d'attribuer une couleur à text-decoration-style/line.

### **text-decoration-skip**

- **description:** est une propriété, qui définit la façon dont les lignes décoration doivent être appliquées aux éléments et aux caractères ! Il existe plusieurs valeurs : none, objects, spaces, leading-spaces, trailing-spaces, edge, box-decoration....

### **text-decoration-skip-ink**

- **description:** définit la façon dont la ligne décoration est dessinée lorsqu'elle rencontre le jambage ou la hampe d'un caractère
  la valeur auto permet d'interrompre la ligne à chaque fois qu'elle croise un glyphe

### **text-decoration-thichkness**

- **description:** définit l'épaisseur ou la larguer de la ligne.

### **text-decoration**

- **description:** permet de réunir plusieurs valeurs vue ci-dessus !

### :current / :cue/ :cue(p)

- **description:** le sélecteur cue, dans le cas d'une video, sélectionne les sous-titres qui sont en train d'appararaître à l'écran, on peut leur donner une liste de propriété pour styliser la mise en forme !

# Pierre

[lien vers la Démo](http://cepegra-labs.be/webdesign/fed2021/pierredu/html-css/discovery-groupe2/)

## HTML TAGS

### **&#60;progress&#62;**

- **description:** une balise inline, qui permet d'afficher la progression d'une tâche.

## CSS PROPERTIES

### **border-image**

- **description:** cette propriété css permet d'appliquer une image sur une bordure

### **clip-path**

- **description** Définit une région de rognage d'un élément

### **clamp**

- **description** Permet d'indiquer une taille maximal et une taille minimal a un élément

# Sifedine

[lien vers la Démo](http://cepegra-labs.be/webdesign/fed2021/sifedine/discoverygroup2/Properties-Discovery/)

## HTML TAGS

### **&#60;datalist&#62;**

- **description:** la Balise "datalist" permet de contenir des option avec une certaine valeur pré-écrite lors du remplissage d'un champ de texte.

## CSS PROPERTIES

### **caret-color/caret-shape**

- **description:** caret-color définit la couleur du curseur visible à l'endroit où l'utilisateur peut ajouter du texte ou un autre contenu dans l'élément lorsqu'il saisit au clavier ou qu'il édite les informations. caret-shape definit la forme du curseur visible lors d'un saisi de texte

### **hyphens**

- **description:** hyphens permet de changer le comportement de gestion des traits d'union lors des sauts de ligne effectuer automatiquement par certains navigateur.

### **:dir**

-**description:** est un pseudo-élément qui permet de cibler un élément la direction du texte
