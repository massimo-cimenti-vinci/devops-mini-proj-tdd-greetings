# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

- N° de groupe : 1
- Membres du groupe : Cimenti Massimo, Dewilde Sébastien
- lien du repos : https://github.com/massimo-cimenti-vinci/devops-mini-proj-tdd-greetings.git

## Énoncé

### Pré-requis :

- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.

```bash
Le fichier yml définit un workflow qui sera déclenché a chaque Merge request / Pull request vers la branche main, une série de test seront alors lancé sur un système d'exploitation Unbuntu avec Node.js 16 et 18 dans notre cas il installe les dépendances, test le code, le coverage, prettier, lint et le build.
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Le "on" sert à spécifier les événements déclencheurs qui seront faites sur notre workflow. L'événement déclencheur "on push" va lancer le pipeline lorsqu'on push notre code alors que "on pull request" lance le pipeline lorsqu'on ouvre, met à jour ou on ferme une pull request et que quelqu'un valide les changements de code avant de fusionner les branches. L'événement "on pull request" est le mieux pour des développeurs juniors car il oblige de faire vérifier le code par un des membres de l'équipe avant de fusionner et de prendre des risques en cassant le code.
```

- Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
Le run_on permet de spécifié l'environnement d'exécution du job, ici cela ce fera sur la dernière version d'Unbuntu. Tandis que run permet d'éxécuter une commande par exemple: npm run prettier.
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
Dans notre cas use permet de sélectionner une certaine version de actions/checkout, le uses: actions/checkout@v3 permet de choisir la v3. Le use est principalement utilisé pour spécifier des actions externes que l'on souhaite utiliser dans le workflow.
Le run permet d'éxécuter des commandes pour build le projet par exemple.
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
Non, dans notre cas on ne peut pas intervertir les étapes de notre pipeline car si par exemple on veut vérifier notre code avec le prettier et le lint, on doit d'abord installer les dépendances de ceux-ci pour que ça fonctionne sinon le pipeline mettra une erreur et s'arrêtera de s'exécuter.
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
Il faudrait savoir si le test a besoin d'une étape du pipeline pour l'ajouter au bon endroit, savoir comment le pipeline agira si il y a des erreurs, savoir quels types de sécurité dois-je effectuer.
```