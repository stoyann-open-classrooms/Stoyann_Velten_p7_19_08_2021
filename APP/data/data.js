export const RECIPES = [
  {
    id: 1,
    name: "Limonade de Coco",
    cover: "limonade-coco.jpeg",
    altText: "Un verre de limonade de coco",
    servings: 1,
    ingredients: [
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Jus de citron",
        quantity: 2,
      },
      {
        ingredient: "Crème de coco",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "Sucre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Glaçons",
      },
    ],
    time: 10,
    description:
      "Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
    appliance: "Blender",
    ustensils: ["cuillère à soupe", "verres", "presse citron"],
  },
  {
    id: 2,
    name: "Poisson cru à la tahitienne",
    altText: "Un bol de poisson cru à la tahitienne dans sa noix de coco ",
    servings: 2,
    ingredients: [
      {
        ingredient: "Thon Rouge (ou blanc)",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Concombre",
        quantity: 1,
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Carotte",
        quantity: 1,
      },
      {
        ingredient: "Citron Vert",
        quantity: 5,
      },
      {
        ingredient: "Lait de coco",
        quantity: 100,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Découper le thon en dés, mettre dans un plat et recouvrir de jus de citron vert (mieux vaut prendre un plat large et peu profond). Laisser reposer au réfrigérateur au moins 2 heures. Si possible faites-le le soir pour le lendemain. Après avoir laissé mariner le poisson, coupez le concombre en fines rondelles sans la peau et les tomates en prenant soin de retirer les pépins. Rayer la carotte. Ajouter les légumes au poisson avec le citron cette fois ci dans un saladier. Ajouter le lait de coco. Pour ajouter un peu plus de saveur vous pouver ajouter 1 à 2 cuillères à soupe de crème de coco",
    appliance: "Saladier",
    ustensils: ["presse citron"],
  },
  {
    id: 3,
    name: "Poulet coco réunionnais",
    altText: "Une assiette de poulet coco réunionnais",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poulet",
        quantity: 1,
      },
      {
        ingredient: "Lait de coco",
        quantity: 400,
        unit: "ml",
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Poivron rouge",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
      },
    ],
    time: 80,
    description:
      "Découper le poulet en morceaux, les faire dorer dans une cocotte avec de l'huile d'olive. Saler et poivrer. Une fois doré, laisser cuire en ajoutant de l'eau. Au bout de 30 minutes, ajouter le coulis de tomates, le lait de coco ainsi que le poivron et l'oignon découpés en morceaux. Laisser cuisiner 30 minutes de plus. Servir avec du riz",
    appliance: "Cocotte",
    ustensils: ["couteau"],
  },
  {
    id: 4,
    name: "Salade de riz",
    altText: "Une assiette de salade de riz",
    servings: 4,
    ingredients: [
      {
        ingredient: "Riz blanc",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Thon en miettes",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Oeuf dur",
        quantity: 2,
      },
      {
        ingredient: "Maïs",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 50,
    description:
      "Faire cuire le riz. Une fois le riz cuit, le laisser refroidir. Couper les oeufs durs en quarts ou en lamelle au choix, couper les tomates en dés, ajouter au riz les oeufs, les tomates, le poisson, le maïs et la vinaigrette. Ajouter au goût de chacun des cornichons, olives etc..",
    appliance: "Cuiseur de riz",
    ustensils: ["saladier", "passoire"],
  },
  {
    id: 5,
    name: "Tarte au thon",
    altText: "Une belle tarte au thon tout juste sortie du four",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 1,
      },
      {
        ingredient: "Thon en miettes",
        quantity: 130,
        unit: "g",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "Gruyère râpé",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Moutarde de Dijon",
        quantity: 1,
        unite: "cuillère à soupe",
      },
    ],
    time: 45,
    description:
      "Etaler la pâte feuilletée aux dimensions du moule, étaler la moutarde sur la pâte feuilletée, ajouter le thon. Découper les tomates en rondelles et les poser sur le poisson, ajouter un peu de crème fraîche sur toute la tarte et recouvrir de gruyère râpé. Cuire au four 30 minutes",
    appliance: "Four",
    ustensils: ["moule à tarte", "râpe à fromage", "couteau"],
  },
  {
    id: 6,
    name: "Tarte aux pommes",
    altText: "Une tarte aux pommes prête a être déguster",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 1,
      },
      {
        ingredient: "Pomme",
        quantity: 3,
      },
      {
        ingredient: "Oeuf",
        quantity: 2,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
    ],
    time: 50,
    description:
      "Mélanger les oeufs, le sucre et le sucre vanillé dans un saladier, découper les pommes en tranches, ajouter la crème fraîche aux oeufs. Une fois que tout est prêt, étaler la tarte dans le moule. Ne pas oublier de piquer le fond avec une fourchette avant de positionner les pommes sur la tarte. Finallement verser la préparation à base d'oeufs et de crème fraîche. Laisser cuire au four pendant 30 minutes",
    appliance: "Four",
    ustensils: ["moule à tarte", "saladier", "fourchette"],
  },
  {
    id: 7,
    name: "Tartelettes au chocolat et aux fraises",
    altText: "Une tartelette au chocolat et aux fraises prêtes à être servie",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte sablée",
        quantity: 1,
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Crème liquide",
        quantity: 80,
        unit: "cl",
      },
      {
        ingredient: "Beurre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Fraise",
        quantity: 6,
      },
    ],
    time: 50,
    description:
      "Etaler la pâte dans les moules à tartelette. Faire cuire la pâte 30 minutes. Découper le chocolat en morceau et le faire chauffer, y ajouter la crème liquide, ajouter le beurre et remuer jusqu'à avoir une pâte homogène. Verser la pâte sur les tartelettes. Couper les fraises en 2 et les positionner sur la pâte.",
    appliance: "Four",
    ustensils: ["moule à tartelettes (6)", "casserole"],
  },
  {
    id: 8,
    name: "Brownie",
    altText: "Deux parts de  brownies au noix",
    servings: 10,
    ingredients: [
      {
        ingredient: "Noix",
        quantity: 180,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 120,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 2,
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 110,
        unit: "g",
      },
      {
        ingredient: "Farine",
        quantity: 90,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Hachez les noix grossièrement. Faire fondre le chocolat avec le beurre. Mélanger les oeufs et le sucre et mélanger au chocolat. Ajouter la farine. Mélanger afin d'avoir quelque chose d'homogène puis incorporer les noix. Verser la préparation dans un moule de préférence rectangulaire. Cuire 2O à 25 minutes à 180°. Sortez du four et attendez quelques minutes pour démouler. Servir avec une boule de glace pour plus de gourmandise.",
    appliance: "Four",
    ustensils: ["moule à gateaux", "casserole"],
  },
  {
    id: 9,
    name: "Salade méditerannéene fraîche au chèvre",

    altText:
      "Une assiette de salade méditerannéene au chèvre accompagnée de noix",
    servings: 4,
    ingredients: [
      {
        ingredient: "Concombre",
        quantity: 1,
      },
      {
        ingredient: "Olives",
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Vinaigre balsamique",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Basilic",
      },
    ],
    time: 15,
    description:
      "Peler le concombre le couper en 2, retirer les pépins. Couper les olives en morceaux, ainsi que le fromage de chèvre. Ajouter le basilic ainsi que le vinaigre balsamique et l'huile d'olive à votre gout.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois", "couteau"],
  },
  {
    id: 10,
    name: "Tartiflette",
    altText: "Un poêlon de tartiflette",
    servings: 4,
    ingredients: [
      {
        ingredient: "Reblochon",
        quantity: 1,
      },
      {
        ingredient: "Pomme de terre",
        quantity: "4 1/2",
        unit: "kg",
      },
      {
        ingredient: "Jambon fumé",
        quantity: 2,
        unit: "tranches",
      },
      {
        ingredient: "Oignon",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Vin blanc sec",
        quantity: 30,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Commencer par cuire les pommes de terre dans l'eau bouillante. Les éplucher et les couper en rondelles. Emincer les oignons puis les faire dorer dans du beurre. Ajouter le jambon fumé coupé en en morceaux ainsi que les pommes de terres. Saler et poivrer. Laisser cuisiner durant environ 10 minutes puis ajouter le vin blanc. Après 5 minutes, mettre le tout dans un plat à gratin. Couper le reblochon, soit en tranches, soit en 2 dans le sens de l'épaisseur et recouvrir les pommes de terre. Cuire au four (à environ 220°) durant 25 minutes. C'est prêt !",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "Économe"],
  },
  {
    id: 11,
    name: "Salade tomates, mozzarella et pommes",
    altText: "Une assiette de salade tomates, mozzarella et pommes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Tomates cerises",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Mozzarella",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Jambon de Parme",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Pomme",
        quantity: 1,
      },
      {
        ingredient: "Salade Verte",
        quantity: 1,
      },
      {
        ingredient: "Vinaigrette",
        quantity: 5,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Commencer par couper les feuilles de salade, ajouter les tomates cerises et le fromage découpé en cubes ou en boules avec la cuillère à melon. Découper le jambon de Parme en fines lamelles. Ajouter la pomme elle aussi découpée en petit morceaux. Assaisonner à votre gout.",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère à melon"],
  },
  {
    id: 12,
    name: "Compote pomme rhubarbe",
    altText: "Une bol de compote pomme rhubarbe",
    servings: 4,
    ingredients: [
      {
        ingredient: "Rhubarbe",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Pomme",
        quantity: 8,
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 6,
        unit: "sachets",
      },
      {
        ingredient: "Eau",
        quantity: "1/2",
        unit: "tasse",
      },
    ],
    time: 40,
    description:
      "Éplucher les fruits et les couper en morceaux, les mettre dans une casserole en ajoutant l'eau et le sucre vanillé. Laisser cuire 15 minutes en remuant régulièrement.",
    appliance: "casserole",
    ustensils: ["couteau", "économe"],
  },
  {
    id: 13,
    name: "Salade mâchée de patates",
    altText: "Une assiettes de salade mâchée de patates",
    servings: 2,
    ingredients: [
      {
        ingredient: "Mâche",
        quantity: 60,
        unit: "g",
      },
      {
        ingredient: "Pomme de terre",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Échalote",
        quantity: 2,
      },
      {
        ingredient: "Vinaigre de cidre",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Cuire les pommes de terre environ 30 minutes. Découper les échalotes finement. Durant la cuisson des pommes de terre. Préparer la vinaigrette avec l'huile d'olive et le vinaigre de cidre. Saler et poivrer à discrétion. Dans un saladier, mettre le mâche.",
    appliance: "Casserole",
    ustensils: ["couteau", "saladier", "cuillère en bois"],
  },
  {
    id: 14,
    name: "Galette bretonne saucisse et fromage à raclette",
    altText:
      "Une galettes saucisse et fromage à raclette attendant d'être dégustée",
    servings: 2,
    ingredients: [
      {
        ingredient: "Saucisse bretonne ou de Toulouse",
        quantity: 2,
      },
      {
        ingredient: "Farine de blé noir",
        quantity: 130,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 1,
      },
      {
        ingredient: "Fromage à raclette",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 75,
        unit: "g",
      },
    ],
    time: 100,
    description:
      "Mélanger la farine et les oeufs, faire fondre 25 grammes de beurre et ajouter à la pâte. Ajouter du sel. Laisser reposer 1 heure. Faire les galettes et laisser refroidir. Faire chauffer les saucisses avec du beurre et l'oignon. Enrouler les saucisses dans les crêpes avec une partie du fromage. Mettre le reste du fromage à raclette par dessus les crêpes. Passer four pendant 20 minutes",
    appliance: "Four",
    ustensils: ["poelle à frire", "couteau"],
  },
  {
    id: 15,
    name: "Crêpes chocolat banane",
    altText: "Deux crêpes chocolat banane prêtes à être dégustées",
    servings: 10,
    ingredients: [
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Lait",
        quantity: 600,
        unit: "ml",
      },
      {
        ingredient: "Beurre salé",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Chocolat au lait",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Banane",
        quantity: 4,
      },
    ],
    time: 60,
    description:
      "Mélanger dans un saladier la farine, les oeufs, et le lait. Battre jusqu'à avoir une masse homogène. Pendant ce temps faire fondre le beurre et en ajouter une partie à la pâte à crêpes. Faire fondre le chocolat (avec le reste du beurre salé). En chauffant les crêpes, ajouter le chocolat fondu et les bananes coupées en rondelles. Ajouter une touche de chantilly pour les gourmands",
    appliance: "Poële à crêpe",
    ustensils: ["saladier", "louche", "cuillère en bois"],
  },
  {
    id: 16,
    name: "Gratin de pâtes à la tomate",
    altText: "Un plat de gratin de pâtes à la tomate",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Mozzarella",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Pennes",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Basilic",
        quantity: 1,
        unit: "tige",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 45,
    description:
      "Faire cuire les pâtes. En l'absence de pennes, des coquillettes peuvent faire l'affaire. Découper les tomates en petits morceaux, soit en tranches, soit en dés. Couper le basilic en petites morceaux et mélanger-le aux tomates.  Couper la mozzarella en tranche. Préchauffer le four à 200°. Alterner entre couches de pâtes et couches de tomates, terminez par une couche de pâtes et recouvrir du fromage. Laisser au four 30 minutes.",
    appliance: "Four",
    ustensils: ["plat à gratin", "couteau", "râpe à fromage"],
  },
  {
    id: 17,
    name: "Smoothie à la fraise",
    altText: "Un verre de smoothie à la fraise",
    servings: 6,
    ingredients: [
      {
        ingredient: "Fraise",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Pastèque",
        quantity: "1/2",
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "Glaçons",
        quantity: 8,
      },
      {
        ingredient: "Menthe",
      },
    ],
    time: 15,
    description:
      "Couper les fraises en morceaux, découper la chair de la pastèque en retirant les pépins. Mettre le tout dans le blender. Ajouter un cuillière à soupe de jus de citron ainsi que les glaçons. Ajouter quelques feuilles de menthe pour plus de fraicheur. Mixer le tout. Servir et déguster.",
    appliance: "Blender",
    ustensils: ["verres", "couteau", "presse citron"],
  },
  {
    id: 18,
    name: "Smoothie ananas et vanille",
    altText: "Un verre de smoothie ananas-vanille servis avec une paille",
    servings: 5,
    ingredients: [
      {
        ingredient: "Ananas",
        quantity: 1,
      },
      {
        ingredient: "Glace à la vanille",
        quantity: 500,
        unit: "ml",
      },
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 10,
    description:
      "Séparer 1/5 d'ananas (une belle tranche qui servira pour la décoration des verres), mettre le reste coupé en cubes au blender, ajouter la glace à la vanille et le lait. Mixer. Servir et décorer avec l'ananas restant. C'est prêt",
    appliance: "Blender",
    ustensils: ["verres", "couteau"],
  },
  {
    id: 19,
    name: "Milkshake banane kiwi",
    altText:
      "Un milkshake banane-kiwi servis avec une paille et deux tranches de kiwi",
    servings: 4,
    ingredients: [
      {
        ingredient: "Kiwi",
        quantity: 4,
      },
      {
        ingredient: "Citron",
        quantity: 1,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "l",
      },
      {
        ingredient: "Sucre glace",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Banane",
        quantity: 1,
      },
    ],
    time: 0,
    description:
      "Couper les fruits en morceaux, ajouter le jus de citron et le lait ainsi que le sucre glace. Mixer. Ajouter des glaçons si le lait n'a pas été mis au frais.",
    appliance: "Blender",
    ustensils: ["couteau", "verres", "presse citron"],
  },
  {
    id: 20,
    name: "Pâtes carbonara",
    altText: "Une assiette de pâtes à la carbonara",
    servings: 5,
    ingredients: [
      {
        ingredient: "Tagliatelles",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Parmesan",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 1,
        unit: "cuillère à soupe",
      },
    ],
    time: 30,
    description:
      "Faire cuire les pâtes comme indiqué sur le paquet. Dorer les lardons dans une sauteuse avec l'huile d'olive. Ajouter la crème fraiche et baisser le feu au minimum. Quand les tagliatelles sont prêtes les mettre dans la sauteuse et bien mélanger le tout en ajoutant le jaune d'oeuf. Servir et ajouter le parmesan râpé.",
    appliance: "Sauteuse",
    ustensils: ["râpe à fromage", "cuillère en bois"],
  },
  {
    id: 21,
    name: "Spaghettis à la bolognaise",
    altText:
      "Une assiette de spaghettis à la bolognaise, avec un peu de persil",
    servings: 4,
    ingredients: [
      {
        ingredient: "Spaghettis",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oignon",
        quantity: 2,
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Viande hachée 1% de matière grasse",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Vin rouge",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 1,
        unit: "cuillère à soupe",
      },
    ],
    time: 30,
    description:
      "Cuisiner la viande hachée dans une poele à frire. Dans une autre faire cuire les oignons découpés en fins dés avec un peu de beurre. Ajouter du vin rouge. Mélanger les oigons avec la viande hachée. Faire cuire les pâtes le temps indiqué sur le paquet. Ajouter le coulis de tomates à la viande hachée. Une fois que les pâtes sont cuites, ajouter la crème fraîche à la viande hachée. Servir.",
    appliance: "Casserole",
    ustensils: ["cuillère en bois", "louche", "couteau"],
  },
  {
    id: 22,
    name: "Fondant au chocolat",
    cover: "fondant-chocolat.jpeg",
    altText: "Un fondant au chocolat bien fondant",
    servings: 4,
    ingredients: [
      {
        ingredient: "Beurre",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Farine",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 4,
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
    ],
    time: 30,
    description:
      "Faire fondre le chocolat et le beurre au bain marie. Dans un saladier battre les oeufs avec le sucre jusqu'à obtenir une texture de type mousse. Ajouter la farine ainsi que le mélange de beurre et chocolat fondu. Beurrer le moule à gâteau. Mettre au four préchauffé à 200° puis faire chauffer pendant 15 minutes. C'est prêt. Servir avec une boule de glace ou une crème dessert.",
    appliance: "Four",
    ustensils: ["moule à gâteau", "fouet", "casserole"],
  },
  {
    id: 23,
    name: "Quiche lorraine",
    altText: "Une quiche lorraine tout juste sortie du four",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Lait",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 60,
    description:
      "Etaler la pâte dans un moule et la piquer. Parsemer de beurre. Faire chauffer les lardons dans une poêle. Battre les oeufs en ajoutant la crème fraîche et le lait. Finalement ajouter les lardons, saler et poivrer. Verser l'ensemble sur la pâte. Cuire environ 50 minutes.",
    appliance: "Four",
    ustensils: ["moule à gâteau", "rouleau à patisserie", "fouet"],
  },
  {
    id: 24,
    name: "Salade de pâtes",
    altText: "Une salade de pâtes servies dans un bol",
    servings: 4,
    ingredients: [
      {
        ingredient: "Thon en miettes",
        quantity: 160,
        unit: "g",
      },
      {
        ingredient: "Maïs",
        quantity: 60,
        unit: "g",
      },
      {
        ingredient: "Tomate",
        quantity: 1,
      },
      {
        ingredient: "Concombre",
        quantity: "1/2",
      },
      {
        ingredient: "Macaronis",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "Mayonnaise",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 40,
    description:
      "Découper le concombre et les tomates en dés, les mettre dans un saladier avec le maïs et les miettes de poisson, ajouter les pâtes. Ajouter la mayonnaise. Mélanger le tout et servir frais.",
    appliance: "Saladier",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 25,
    name: "Cookies",
    altText: "Des cookies aux pépites de chocolat",
    servings: 4,
    ingredients: [
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Chocolat noir en pépites",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 1,
      },
    ],
    time: 30,
    description:
      "Faire fondre le beurre et le mélanger avec le sucre. Ajouter l'oeuf puis la farine tout en mélangeant petit à petit pour avoir une masse sans grumeaux. Ajouter les pépites de chocolat. Faire sur une plaque de cuisson de petites boules pour les cookies. Mettre au four à 180° pour 10 minutes.",
    appliance: "Four",
    ustensils: ["fouet", "saladier", "plaque de cuisson"],
  },
  {
    id: 26,
    name: "Soupe de tomates",
    altText: "Un bol de soupe de tomates prête à être dégustée",
    servings: 2,
    ingredients: [
      {
        ingredient: "Tomate",
        quantity: 6,
      },
      {
        ingredient: "Pomme de terre",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousse",
      },
    ],
    time: 25,
    description:
      "Verser de l'huile dans une cocotte minute couper les légumes et les verser dans l'huile chaude. Laisser cuire et remuer pendant 10 minutes. Passer aux mixer. Servir.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau"],
  },
  {
    id: 27,
    name: "Soupe à l'oseille",
    altText: "Une assiette de soupe à l'oseille.",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oseille",
        quantity: 2,
      },
      {
        ingredient: "Oeuf",
        quantity: 1,
      },
      {
        ingredient: "Crème fraîche",
        quantity: 4,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "Vermicelles",
        quantity: 1,
        unit: "verre",
      },
      {
        ingredient: "Beurre salé",
        quantity: 50,
        unit: "g",
      },
    ],
    time: 15,
    description:
      "Faire fondre l'oseille avec du beurre demi-sel. Ajouter un litre d'eau. Ajouter les vermicelles. Laisser cuire. Une fois prêt, sortir du feu et après 5 minutes ajouter le jaune d'oeuf et la crème fraîche",
    appliance: "Casserole",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 28,
    name: "Soupe de poireaux",
    altText: "Un bol de soupe de poireaux",
    servings: 4,
    ingredients: [
      {
        ingredient: "Poireau",
        quantity: 3,
      },
      {
        ingredient: "Pomme de terre",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oseille",
        quantity: 75,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 10,
        unit: "cl",
      },
    ],
    time: 80,
    description:
      "Emincer les blancs de poireaux et les faire chauffer dans 25 grammes de beurre. AJouter les pommes de terres coupées en morceaux. Ajouter l'eau et laisser mijoter pour 45 minutes. Chauffer l'oseille avec le beurre restant puis incorporer le tout. Mixer. Ajouter la crème. Bon appétit.",
    appliance: "Mixer",
    ustensils: ["casserole", "couteau"],
  },
  {
    id: 29,
    name: "Houmous express",
    altText: "Un petit bol de houmous maison",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pois chiches",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "Ail",
        quantity: 1,
        unit: "gousse",
      },
      {
        ingredient: "Citron",
        quantity: 2,
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Paprika",
      },
    ],
    time: 30,
    description:
      "Prendre les pois chiches, les mettre dans le mixer avec de l'huile d'olive, ajouter le jus des 2 citrons et du paprika selon le gout.",
    appliance: "Mixer",
    ustensils: ["cuillère en bois", "presse citron"],
  },
  {
    id: 30,
    name: "Purée de pois cassés",
    altText: "Une belle assiette de purée de pois cassés",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pois Cassé",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Ail",
        quantity: 2,
        unit: "gousses",
      },
    ],
    time: 60,
    description:
      "Mettre tous les ingrédients dans une cocotte. Ajouter de l'eau pour recouvrir l'ensemble et laisser cuire à petit feu pendant 1 heure. Passer au mixer. Saler, poivrer. C'est prêt",
    appliance: "Mixer",
    ustensils: ["casserole", "cuillère en bois"],
  },
  {
    id: 31,
    name: "Jardinière de légumes",
    altText: "Une assiette remplie d'une belle jardinière de légumes",
    servings: 4,
    ingredients: [
      {
        ingredient: "Carotte",
        quantity: 2,
      },
      {
        ingredient: "Pomme de terre",
        quantity: 2,
      },
      {
        ingredient: "Haricots verts",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Petits pois",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Lardons",
        quantity: 150,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Découper en cubes les carottes et pommes de terre. Faire revenir dans du beurre. Ajouter les lardons, une fois les lardons dorés, ajouter un grand verre d'eau. Ajouter les petit pois et les haricots verts (tous deux pré-cuits). Ajouter sel, poivre, thym et laurier",
    appliance: "Poële",
    ustensils: ["Couteau", "économe"],
  },
  {
    id: 32,
    name: "Croque-monsieur à la dinde",
    altText: "Un croque-monsieur à la dinde doré, partagé en deux",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Blanc de dinde",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Emmental",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Gruyère",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Lait",
        quantity: 5,
        unit: "cl",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 20,
    description:
      "Beurrer les tranches de pain, ajouter entre 2 tranches de pain de mie une tranche d'emmental, une de blanc de dinde et une autre d'emmental. Dans un récipient, mélanger le gruyère rapé avec le lait et la noix de muscade. Etaler sur les croque-monsieur. Placer au four durant 10 minutes.",
    appliance: "Four",
    ustensils: ["râpe à fromage", "cuillère à soupe", "couteau"],
  },
  {
    id: 33,
    name: "Sandwich au saumon fumé",
    altText: "Un appétissant sandwich au saumon fumé",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain de mie",
        quantity: 8,
        unit: "tranches",
      },
      {
        ingredient: "Saumon Fumé",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Feuilles de laitue",
        quantity: 4,
      },
      {
        ingredient: "Fromage blanc",
        quantity: 4,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "Jus de citron",
        quantity: 1,
        unit: "cuillère à soupe",
      },
    ],
    time: 5,
    description:
      "Mélanger le fromage blanc avec le citron. Ajouter un peu de sel et de poivre. Faire dorer le pain de mie, puis étaler le mélange. Ajouter une feuille de salade puis le saumon fumé. C'est prêt.",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois"],
  },
  {
    id: 34,
    name: "Purée de patates douces",
    altText: "Un bol rempli de purée de patates douces",
    servings: 4,
    ingredients: [
      {
        ingredient: "Patate douce",
        quantity: 800,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Huile d'olive",
      },
      {
        ingredient: "Orange",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      "Eplucher les patates douces et les couper en morceaux. Les faire cuire durant 20 minute dans une casserole d'eau bouillante. Passer au mixer en ajoutant la crème et l'huile d'olive à son goût. Saler et poivrer. Presser l'orange et ajouter le jus à l'ensemble. Servir.",
    appliance: "Mixer",
    ustensils: ["couteau", "économe", "cuillère en bois"],
  },
  {
    id: 35,
    name: "Purée de carottes",
    altText: "Un bol rempli de purée de carottes",
    servings: 2,
    ingredients: [
      {
        ingredient: "Carotte",
        quantity: 6,
      },
      {
        ingredient: "Pomme de terre",
        quantity: 1,
      },
      {
        ingredient: "Beurre",
        quantity: 20,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 2,
        unit: "cuillères à soupe",
      },
      {
        ingredient: "Cumin",
        quantity: 1,
        unit: "cuillère à café",
      },
      {
        ingredient: "Noix de muscade",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 25,
    description:
      "Éplucher les légumes, les couper en morceaux et les mettre à cuire dans une cocotte minute environ 15 minutes. Mixer en ajoutant le beurre, la crème. Ajouter le cumin et la noix de muscade.",
    appliance: "Mixer",
    ustensils: ["cocotte minute", "couteau", "cuillère en bois"],
  },
  {
    id: 36,
    name: "Lasagnes courgettes et chèvre",
    altText: "Des lasagnes courgettes et chèvre dans leur plat",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 2,
      },
      {
        ingredient: "Fromage de chèvre",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Lasagnes",
        quantity: 5,
        unit: "feuilles",
      },
      {
        ingredient: "Gruyère",
        quantity: 40,
        unit: "g",
      },
      {
        ingredient: "Maïzena",
        quantity: 1,
        unit: "cuillère à soupe",
      },
    ],
    time: 35,
    description:
      "Raper les courgettes et les faire revenir durant 15 minutes. Ajouter les fromages de chèvre frais. Préparer la béchamel avec le lait et la maïzena. Saler et poivrer. Ajouter de la noix de muscade. Dans un plat, mettre un peu de sauce au fond, puis des lasagnes, puis des courgettes etc... terminer par de la sauce et ajouter le gruyère. Passer au four à 180° durant 20 à 25 minutes.",
    appliance: "Four",
    ustensils: ["plat à gratin", "râpe à fromage", "fouet"],
  },
  {
    id: 37,
    name: "Courgettes farcies au boeuf",
    altText: "Trois courgettes ronde farcies prête a êtres déguster",
    servings: 2,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 2,
      },
      {
        ingredient: "Viande hachée",
        quantity: 600,
        unit: "g",
      },
      {
        ingredient: "Huile d'olive",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "Coulis de tomates",
        quantity: 20,
        unit: "cl",
      },
      {
        ingredient: "Gruyère",
        quantity: 50,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Couper les courgettes dans le sens de la longueur. Vider les courgette dans un saladier. Réserver. Faire revenir la chair des courgettes dans 25cl d'huile d'olive. Ajouter l'oignon puis la viande hachée. Mettre la farce dans les courgettes. Ajouter le coulis de tomates. Mettre au four pendant 30 minutes. Avant la fin de la cuisson ajouter le fromage rapé",
    appliance: "Four",
    ustensils: ["couteau", "cuillère en bois", "Poelle à frire"],
  },
  {
    id: 38,
    name: "Pain perdu",
    altText: "Trois tranches de pain perdu recouvertes de beurre fondu",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pain",
        quantity: 6,
        unit: "tranches",
      },
      {
        ingredient: "Lait",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Sucre roux",
        quantity: 75,
        unit: "g",
      },
    ],
    time: 20,
    description:
      "Fouettez les oeufs, le sucre et le lait. Tremper les tranches de pain. Le cuire au four pendant environ 10 minutes à 180°. Servir",
    appliance: "Four",
    ustensils: ["fouet", "bol", "Cuillère à soupe"],
  },
  {
    id: 39,
    name: "Crumble aux pommes",
    altText: "Un crumble aux pommes tout juste sortie du four",
    servings: 40,
    ingredients: [
      {
        ingredient: "Pomme",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "Sucre roux",
        quantity: 80,
        unit: "g",
      },
    ],
    time: 40,
    description:
      "Découper les pommes en dés. Mélanger dans un saladier la farine, le sucre et le beurre. Bien mélanger. Beurrer le moule et ajouter les pommes. Par dessus, placer la pâte que vous avez obtenu. Cuire 20 minutes au four",
    appliance: "Four",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 40,
    name: "Limonade",
    altText:
      "Un verre de limonade bien fraîche decorer d'une feuille de menthe",
    servings: 4,
    ingredients: [
      {
        ingredient: "Eau",
        quantity: 1,
        unit: "l",
      },
      {
        ingredient: "Citron Vert",
        quantity: 3,
      },
      {
        ingredient: "Sucre en poudre",
        quantity: 4,
        unit: "cuillères à café",
      },
      {
        ingredient: "Bicarbonate",
        quantity: 1,
        unit: "cuillère à café",
      },
    ],
    time: 10,
    description:
      "Dans un saladier mettre l'eau, le jus des citrons et le sucre. Bien mélanger. Ajouter le bicarbonate. Servir. Ajouter des glaçons et une feuille de menthe pour la déco.",
    appliance: "Saladier",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 41,
    name: "Mousse au chocolat",
    cover: "mousse-chocolat.jpeg",
    altText: "Une mousse au chocolat servie dans une verrine",
    servings: 4,
    ingredients: [
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Chocolat noir",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
    ],
    time: 20,
    description:
      "Séparer les blancs d'oeufs. Faire fondre le chocolat au bain marie. Ajouter les jaunes et le sucre au chocolat hors du feu. Battre les blancs en neige. Ajouter les blancs au mélange de chocolat. Mélanger délicatement avec une spatule. Servir dans un plat ou dans des verres. Mettre au frais",
    appliance: "casserole",
    ustensils: ["fouet", "spatule", "verres"],
  },
  {
    id: 42,
    name: "Charlotte aux poires",
    altText: "Une charlotte aux poires et au chocolat sur un plat",
    servings: 3,
    ingredients: [
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Poires au jus",
        quantity: "1/2",
        unit: "boîte",
      },
      {
        ingredient: "Boudoirs",
        quantity: 15,
      },
    ],
    time: 60,
    description:
      "Commencer par préparer la mousse au chocolat au moins 2 heures à l'avance. Quand la mousse est prête et a reposé, mouiller les boudoirs dans le jus des poires. Disposer en alternant : mousse au chocolat, boudoirs et poires. Mettre au frais.",
    appliance: "Moule à charlotte",
    ustensils: ["saladier", "couteau", "fouet"],
  },
  {
    id: 43,
    name: "Tarte au citron",

    altText: "Une part de tarte au citron sur une petite assiette à dessert",
    servings: 6,
    ingredients: [
      {
        ingredient: "Pâte brisée",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Beurre fondu",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 3,
      },
      {
        ingredient: "Citron",
      },
    ],
    time: 50,
    description:
      "Préchauffer le fours à 200°. Etaler la pâte. La mettre dans un moule. Battre les oeufs avec le sucre. Ajouter le jus de citron et le beurre. Verser le tout sur la pâte. Au four 30 minutes. Bon appétit ",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "moule à tarte", "presse citron"],
  },
  {
    id: 44,
    name: "Crème dessert au chocolat",
    altText: "De la crème au chocolat servie dans deux pots dessert",
    servings: 6,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "l",
      },
      {
        ingredient: "Chocolat",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 50,
        unit: "g",
      },
      {
        ingredient: "farine",
        quantity: 40,
        unit: "g",
      },
    ],
    time: 15,
    description:
      "Mélanger la farine et le beurre fondu en ajoutant le lait peu à peu. Ajouter le sucre après la cuisson. Bien mélanger. Ajouter le chocolat en morceaux et laisser chauffer 8 minutes en mélangeant avec une cuillère en bois. Mettre dans des verres",
    appliance: "casserole",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 45,
    name: "Crème pâtissière",
    altText: "Un bol de crème patissière",
    servings: 8,
    ingredients: [
      {
        ingredient: "Lait",
        quantity: 50,
        unit: "cl",
      },
      {
        ingredient: "Oeuf",
        quantity: 2,
      },
      {
        ingredient: "Farine",
        quantity: 30,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 80,
        unit: "g",
      },
    ],
    time: 30,
    description:
      "Faire bouillir le lait (on peut y ajouter de l'essence de vanille). Battre les oeufs et le sucre, ajouter la farine puis ajouter le lait chaud. Remettre à feu doux pour faire épaissir en remuant pendant 5 à 10 minutes.",
    appliance: "Casserole",
    ustensils: ["fouet", "saladier"],
  },
  {
    id: 46,
    name: "Far breton",
    altText: "Un far breton tout juste découpée",
    servings: 6,
    ingredients: [
      {
        ingredient: "Farine",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
      {
        ingredient: "Oeuf",
        quantity: 4,
      },
      {
        ingredient: "Lait",
        quantity: 1,
        unit: "l",
      },
      {
        ingredient: "Pruneaux",
        quantity: 100,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Mélanger la farine avec le sucre et les oeufs en ajoutant du sucre vanillé. Ajouter le lait petit à petit. Ajouter un petit verre de rhum. Verser la masse dans un plat beurré y placer les pruneaux et faire cuire à 200° pendant 45 minutes",
    appliance: "Four",
    ustensils: ["fouet", "moule", "verres"],
  },
  {
    id: 47,
    name: "Mousse au citron",
    altText: "Une mousse au citron servie dans un ramequin",
    servings: 6,
    ingredients: [
      {
        ingredient: "Jus de citron",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Mascarpone",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "Sucre",
        quantity: 100,
        unit: "g",
      },
      {
        ingredient: "Crème fraîche",
        quantity: 20,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Mélanger le jus de citron avec le sucre et la mascarpone. Ajouter la crème fraîche. Mélanger le tout et mettre au congélateur pendant 1 heure. Servir",
    appliance: "Saladier",
    ustensils: ["fouet", "verres", "cuillère en bois"],
  },
  {
    id: 48,
    name: "Pizza",
    altText: "Une belle pizza aux olives",
    servings: 4,
    ingredients: [
      {
        ingredient: "Pâte à pizza",
        quantity: 1,
      },
      {
        ingredient: "Tomates pelées",
        quantity: 1,
        unit: "boîte",
      },
      {
        ingredient: "Lardons",
        quantity: 1,
        unit: "barquette",
      },
      {
        ingredient: "Champignons de Paris",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "Gruyère",
        quantity: 200,
        unit: "g",
      },
    ],
    time: 40,
    description:
      "Étaler la pâte à pizza. Ecraser les tomates pelées, les étaler sur la pâte, ajouter les lardons et les champignons. Ajouter le gruyère et passer au four à 220° durant 20 minutes",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "râpe à fromage", "couteau"],
  },
  {
    id: 49,
    name: "Smoothie tropical",
    altText: " verre de smoothie tropical",
    servings: 4,
    ingredients: [
      {
        ingredient: "Banane",
        quantity: 2,
      },
      {
        ingredient: "Kiwi",
        quantity: 3,
      },
      {
        ingredient: "Mangue",
        quantity: 1,
      },
      {
        ingredient: "Ananas",
        quantity: 4,
        unit: "tranches",
      },
      {
        ingredient: "Miel",
        quantity: 2,
        unit: "cuillères à soupe",
      },
    ],
    time: 0,
    description:
      "Découper les fruits. Les passer au blender jusqu'à obtenir une texture liquide. Mettre au frais. Servir",
    appliance: "Blender",
    ustensils: ["couteau", "verres"],
  },
  {
    id: 50,
    name: "Galette des Rois",
    altText: "Une galette des Rois et sa couronne",
    servings: 2,
    ingredients: [
      {
        ingredient: "Pâte feuilletée",
        quantity: 400,
        unit: "g",
      },
      {
        ingredient: "Oeuf",
        quantity: 6,
      },
      {
        ingredient: "Poudre d'amandes",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Beurre",
        quantity: 500,
        unit: "g",
      },
      {
        ingredient: "Sucre glace",
        quantity: 500,
        unit: "g",
      },
    ],
    time: 60,
    description:
      "Préparer la frangipane : mélanger le sucre la poudre d'amandes, le beurre et les oeufs. Etaler la moitié de la pâte feuilleté et mettre dans un moule à tarte. Garnir de frangipane et recouvrir du reste de pâte feuilletée. Mettre au four 30 minutes",
    appliance: "Four",
    ustensils: ["rouleau à patisserie", "fouet"],
  },

  // ********** recettes rajouter  **********
  {
    id: 51,
    name: "Confiture d'igname mauve",
    altText: "Une verrine de confiture d'igname mauve",
    servings: 4,
    ingredients: [
      {
        ingredient: "ignames mauve en morceaux",
        quantity: 1,
        unit: "KG",
      },
      {
        ingredient: "Sucre",
        quantity: 200,
        unit: "g",
      },
      {
        ingredient: "Miel",
        quantity: 300,
        unit: "g",
      },
      {
        ingredient: "gousse de vanille",
        quantity: 1,
      },
      {
        ingredient: "Eau",
        quantity: 0.6,
        unit: "L",
      },
    ],
    time: 40,
    description:
      "Faites cuire le sucre avec un peu de liquide jusqu'à obtenir un caramel blond (ou départ à sec). Ajouter les morceaux d'igname, la gousse de vanille fendue en deux sans oublier de gratter les graines et de les incorporer à la préparation. Mélanger bien. Mouillez avex le liquide et faites cuire environ 5 à 8 minutes. Avec une lame de couteaux, piquez un morceau d'igname pour contrôler la cuisson. l'igname soit être fondante. Lorsque la confiture nappe la cuillère, c'est signe qu'elle est cuite comme il faut",
    appliance: "casserole",
    ustensils: ["couteau", "cuillère"],
  },
  {
    id: 52,
    name: "Rilletes de porc 'fin' faciles",
    altText: "Un pot de rillettes de porc et des toast  a pret a être manger",
    servings: 12,
    ingredients: [
      {
        ingredient: "épaule de porc",
        quantity: 350,
        unit: "gr",
      },
      {
        ingredient: "Eau",
        quantity: 50,
        unit: "cl",
      },
      {
        ingredient: "Graise d'oie",
        quantity: 150,
        unit: "g",
      },
      {
        ingredient: "Mélange 4 épices",
        quantity: 1,
        unit: "cuillère à café",
      },
      {
        ingredient: "Sel",
        quantity: 5,
        unit: "g",
      },
      {
        ingredient: "Poivre",
        quantity: 2,
        unit: "pincées",
      },
    ],
    time: 260,
    description:
      "Coupez l'épaule de porc en morceaux. Faites cuire les morceaux de viande avec l'eau, le mélange 4 épices, le sel, le poivre, et la graisse d'oie dans une grande cocotte a feux doux. Laisser cuire jusqu'a ce que l'eau soit complétement absorbée (environ 4 heures). Ecrasez la viande à la fourchette. Laissez refroidir. Répartisez les rilletes dans des pots stérilisés si vous voulez les conserver. ",
    appliance: "cocotte",
    ustensils: ["couteau", "pots"],
  },
  {
    id: 53,
    name: "Steak de thon aux épices",
    altText: "Steak de thon aux épices tout juste découper",
    servings: 4,
    ingredients: [
      {
        ingredient: "pavés de thon frais",
        quantity: 4,
        unit: "de 150 g",
      },
      {
        ingredient: "tomates cerises",
        quantity: 250,
        unit: "g",
      },
      {
        ingredient: "sauce soja",
        quantity: 2,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "poudre de curry",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "Piment d'Espelette",
        quantity: 0.5,
        unit: "cuillère à café",
      },
      {
        ingredient: "Sucre",
        quantity: 1,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "Echalotes",
        quantity: 1,
      },
      {
        ingredient: "Huile d'olive",
        quantity: 3,
        unit: "cuillère à soupe",
      },
      {
        ingredient: "bouquet de coriandre",
        quantity: 1,
      },
    ],
    time: 25,
    description:
      " Dans un bol, mélangez la sauce soja , les épices et le sucre. Trempez les tomates (en les laissant en grappe) dans ce mélange et reserver. Coupez les pavés de thon en deux et badigeonnez-les sur les deux faces du reste du mélanges aux épices. Pelez les échalotes et coupez-les en deux. Faites chauffer un Wok sur feu vif. Ajoutez l'huile et quand elle est chaude, faites-y dorer les échalotes 5 minutes en remuant. Ajoutez les pavés de thon, saisissez-les 4 minutes (2minutes par face. Le thon doit rester saignant) en même temps que les tomates. Disposez les pavés de thon dans 4 assietes, garnissez-les des grappes de tomates, des échalotes et de pluche de coriandre. Servez aussitôt",
    appliance: "Wook",
    ustensils: ["pinceau", "couteau", "plat"],
  },
  {
    id: 54,
    name: "Nouilles de patates douces",
    altText: "Steak de thon aux épices tout juste découper",
    servings: 4,
    ingredients: [
      {
        ingredient: "nouilles",
        unit: "150 g",
      },
      {
        ingredient: "carottes",
        quantity: 2,
      },
      {
        ingredient: "gousse d'ail",
        quantity: 1,
      },
      {
        ingredient: "sauce de soja",
        quantity: 1,
        unit: "cuillère à café",
      },
      {
        ingredient: "Poivron",
        quantity: 1,
      },
      {
        ingredient: "Oignon",
        quantity: 1,
      },
      {
        ingredient: "huile de sésame",
        quantity: 1,
        unit: "cuillère à café",
      },
      {
        ingredient: "Sucre",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 30,
    description:
      " Faites bouillir de l’eau non salée dans une casserole. Versez-y les nouilles pendant 5 min en les mélangeant régulièrement. Faites cuire votre poivron, vos carottes en fines lamelles, et votre oignon émincé dans une poêle et remuez. Ajoutez l’ail pressé. Rincer les nouilles. Égouttez-les. Ajoutez 1 c. à café d’huile de sésame, 1 autre de sauce soja, 1 pincée de sucre. Mélangez le tout. Astuces : Les nouilles de patate douce sont cuisinées avec des légumes. Vous pouvez également les marier avec du bœuf ou du porc. ",
    appliance: "casserole",
    ustensils: ["poêle", "couteau", "plat", "cuillere"],
  },
  {
    id: 55,
    name: "Poé a la citrouille",
    altText: "Un délicieux poé a la citrouille dans une verrine",
    servings: 4,
    ingredients: [
      {
        ingredient: " citrouille mûre",
        quantity: 1,
        unit: "kg",
      },
      {
        ingredient: " lait de coco",
        quantity: 1,
        unit: "litre",
      },
      {
        ingredient: " sucre en poudre",
        quantity: 1,
        unit: "Gr",
      },
      {
        ingredient: " farine de manioc",
        quantity: 500,
        unit: "Gr",
      },
    ],
    time: 60,
    description:
      " Epluchez votre citrouille au couteau ou avec un économat. Découpez votre citrouille en gros morceaux de 5 cm.Faites bouillir vos morceaux de citrouille dans une marmite remplie d'eau jusqu'à ce qu'ils deviennent mous. Vérifiez la cuisson avec la pointe d'un couteau. Une fois cuit, réservez-les dans un saladier, écrasez votre morceaux en purée et faites-les refroidir. Dans une casserole, faites bouillir votre lait de coco. Rajoutez le sucre en poudre. une fois prêt, laissez refroidir votre préparation.Mélangez votre purée de citrouille avec la farine de manioc (1 bol de farine de manioc pour 2 bols de purée de citrouille). Placez votre préparation dans un plat puis enfournez-le au four pendant 30 minutes à 180C°. Une fois cuit, coupez des cubes de 5 cm et trempez-les dans le lait de coco. Servez dans un ramequin accompagnée de jus de coco. Bon appétit ! A noter : en Polynésie, le poé est à la fois un accompagnement et un dessert. Vous pouvez également le réalisez avec d'autres fruits dont la banane poingo !",
    appliance: "four",
    ustensils: ["saladier", "casserole", "plat", "marmitte", "ramequin"],
  },
  {
    id: 56,
    name: "Brochette de cerf marinée",
    altText: "Une delicieuse brochette de cerf marinée prête a être déguster",
    servings: 4,
    ingredients: [
      {
        ingredient: " viande de cerf coupés en cubes d’environ 4cm",
        quantity: 800,
        unit: "gr",
      },
      {
        ingredient: "huile d’olive",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: " sauce soja",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "vinaigre de vin rouge",
        quantity: 1,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "ketchup",
        quantity: 3,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "gousses d’ail écrasées",
        quantity: 2,
      },
      {
        ingredient: "sel",
      },
      {
        ingredient: "Poivre",
      },
    ],
    time: 20,
    description:
      " Enfiler les morceaux de cerf sur un pic à brochette (en bois ou inox). Dans un plat, préparez votre marinade avec l’huile, la sauce soja, le vinaigre de vin, le ketchup et l’ail. Salez et poivrez a convenance.Enrobez toutes vos brochettes de cette préparation et laissez reposer pendant une heure. Faites cuire vos brochettes au barbecue ou à la plancha. Bon appétit !! ",
    appliance: "plancha",
    ustensils: ["pic à brochette ", "plat"],
  },
  {
    id: 57,
    name: "Sorbet a la mangue",
    altText: "Une coupe de sorbet a la mangue dans un ramequin",
    servings: 4,
    ingredients: [
      {
        ingredient: "  grosses mangues mures",
        quantity: 3,
      },
      {
        ingredient: "sucre",
        quantity: 150,
        unit: "gr",
      },
      {
        ingredient: "eau",
        quantity: 2,
        unit: "Dl",
      },
    ],
    time: 30,
    description:
      " Dans une casserole faire fondre le sucre dans de l'eau tiède en tournant avec une spatule, chauffer et retirer le sirop après 2 bouillons. Laisser refroidir, ajouter les mangues réduites en purée, mélanger et mettre au congélateur pendant 5 heures. Durant la congélation remuer à la fourchette 4 à 5 fois Lorsque le sorbet est a moitié pris l’enlever Battre au fouet Remettre au congélateur Et dégustez votre sorbet de mangue . Astuce : Vous pouvez rajouter de la pulpe du fruit de la passion.",
    appliance: "casserole",
    ustensils: ["spatule ", "fourchette", "fouet"],
  },
  {
    id: 58,
    name: "Roti de porc caramelisé",
    altText: "tranche de roti de porc caramelisé prêt a être croquer",
    servings: 4,
    ingredients: [
      {
        ingredient: "travers de porc",
        quantity: 1,
        unit: "Kg",
      },
      {
        ingredient: "jus d’ananas",
        quantity: 1,
        unit: "L",
      },
      {
        ingredient: "Miel",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "Sauce soja",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "vinaigre de Miel",
        quantity: 1,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "Ketchup",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "ail",
        quantity: 4,
        unit: "gousse",
      },
      {
        ingredient: "gingembre rapé",
        quantity: 20,
        unit: "Gr",
      },
      {
        ingredient: "huile d'olive",
      },
      {
        ingredient: "sel & poivre",
      },
    ],
    time: 120,
    description:
      "Préparez votre travers de porc ou demandez à votre boucher d’entailler la couenne de Porc de façon à faire des losanges. Mettre le travers de porc dans une marmite d'eau chaude et laissez cuire pendant 30 minutes. Retirer le et laissez le égoutter sur une grille (15mns).Préparez la marinade : mettre tous les ingrédients dans un grand cul de poule, mélangez au fouet. Badigeonnez à l'aide d'un pinceau votre travers de Porc uniformément et garder le reste de la marinade. Enfournez le travers au four à 180°C côté couenne au dessus et laissez caraméliser. Retournez la pièce durant la cuisson, environ 10/12 minutes par côté. Arrosez avec le reste de la marinade tout au long de la cuisson à l’aide d’une louche. Quand les travers sont cuits, mettre le four à 200°C et laissez la couenne caraméliser à votre convenance. Bon appétit",
    appliance: "four",
    ustensils: ["grille ", "couteau", "cul de poule", "pinceau"],
  },
  {
    id: 59,
    name: "Pomme de terre sautée facon grand-mère",
    altText: "tranche de roti de porc caramelisé prêt a être croquer",
    servings: 4,
    ingredients: [
      {
        ingredient: "pommes de terre",
        quantity: 1.5,
        unit: "Kg",
      },
      {
        ingredient: "echalottes",
        quantity: 1,
      },
      {
        ingredient: "gros sel",
        quantity: 1,
        unit: "cuillere a café",
      },
      {
        ingredient: "beurre froid",
        quantity: 2,
        unit: "cuillere a soupe",
      },
    ],
    time: 120,
    description:
      "Epluchez les pommes de terre puis découpez-le en morceaux assez gros et réguliers. Passez les morceaux de pomme de terre sous l’eau afin d’enlever l’amidon. Mettez les morceaux encore mouillés dans un torchon sec puis frottez-les.Faites chauffez l’huile dans une poêle à fond épais, ajoutez y le gros sel, puis les pommes de terre. Laissez le cuire à feux vif en les tournants régulièrement pendant 20 minutes. Elles doivent bien  colorer. Baissez le feu et laissez-le cuire encore 10 minutes. Ajoutez l’échalote ciselée et cuire encore 5 minutes. Ajoutez le beurre froid (cela va les faire croustiller), et laissez cuire encore 15 minutes en les mélangeant. Vérifiez la cuisson et servez-les immédiatement.   ",
    appliance: "poêle",
    ustensils: ["torchon", "couteau", "ciseaux", "cuillère en bois"],
  },
  {
    id: 60,
    name: "Magrets de canard au miel",
    altText:
      "Un magret de cannard coupé en tranche dans une assiette acompagnés de ces légumes.",
    servings: 4,
    ingredients: [
      {
        ingredient: "magret de canard",
        quantity: 2,
      },
      {
        ingredient: "vinaigre balsamique",
        quantity: 3,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "miel",
        quantity: 3,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "sel",
      },
    ],
    time: 20,
    description:
      "Inciser les magrets côté peau en quadrillage sans couper la viande. Cuire les magrets à feu vif dans une cocotte en fonte, en commençant par le coté peau. Le temps de cuisson dépend du fait qu'on aime la viande plus ou moins saignante. Compter environ 5 min de chaque côté. Retirer régulièrement la graisse en cours de cuisson. Réserver les magrets au chaud (au four, couverts par une feuille d'aluminium). Déglacer la cocotte avec le miel et le vinaigre balsamique. Ne pas faire bouillir, la préparation tournerait au caramel. Bien poivrer. Mettre en saucière accompagnant le magret coupé en tranches. Comme accompagnement, je suggère des petits navets glacés (cuits à l'eau puis passés au beurre avec un peu de sucre).",
    appliance: "cocotte",
    ustensils: ["saucière", "four", "cuillère en bois"],
  },
  {
    id: 61,
    name: "Porc au sucre calédonien",
    altText: "Une assiette de porc au sucre acompagnés de riz blanc.",
    servings: 4,
    ingredients: [
      {
        ingredient: "échine de porc",
        quantity: 800,
        unit: "Gr",
      },
      {
        ingredient: "Oignons",
        quantity: 2,
      },
      {
        ingredient: "gousse d'ail",
        quantity: 2,
      },
      {
        ingredient: "sucre",
        quantity: 80,
        unit: "Gr",
      },
      {
        ingredient: "eau",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "huile",
        quantity: 2,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "eau chaude",
        quantity: 30,
        unit: "cl",
      },
      {
        ingredient: "piment rouge",
        quantity: 1,
      },
      {
        ingredient: "poivron",
        quantity: 0.5,
      },
    ],
    time: 35,
    description:
      "Éplucher et émincer les deux oignons et l’ail. Émincer le poivron, si comme moi, il y a un morceau à liquider.Couper la viande en gros dés, en enlevant un peu de gras si nécessaire.Mettre le sucre dans une petite casserole et le mouiller avec les deux cuilleres à soupe d’eau. Réserver.Faire chauffer l’huile dans un faitout ou un wok. Y faire dorer les oignons, puis ajouter la viande, le poivron et l’ail et continuer la cuisson en remuant régulièrement. Pendant ce temps, mettre la casserole de sucre à chauffer à feu vif pour faire un caramel. Assaisonner la viande avec la sauce soja et le nuoc mam puis ajouter le caramel. Bien enrober la viande puis ajouter l’eau chaude et bien mélanger. Baisser le feu et laisser mijoter jusqu’à ce que la viande soit tendre. Pendant ce temps, éplucher les tiges d’oignons verts, les laver ainsi que le piment. Émincer le tout. Servir le porc au sucre agrémenté de l’oignon vert émincé et de rondelles de piment rouge, avec du riz.",
    appliance: "wook",
    ustensils: ["casserole", "couteau", "cuillère en bois"],
  },
  {
    id: 62,
    name: "Gratin de choucoute",
    altText: "Un gratin de chouchoute tout juste sortie du four",
    servings: 4,
    ingredients: [
      {
        ingredient: "chouchoute",
        quantity: 1,
        unit: "Kg",
      },
      {
        ingredient: "lait",
        quantity: 0.5,
        unit: "litre",
      },
      {
        ingredient: "gousse d'ail",
        quantity: 3,
      },
      {
        ingredient: "crème",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "farine",
        quantity: 60,
        unit: "gr",
      },
      {
        ingredient: "beurre",
        quantity: 60,
        unit: "gr",
      },
      {
        ingredient: "persil chinois",
        quantity: 1,
        unit: "botte",
      },
      {
        ingredient: "jaune d'oeuf",
        quantity: 2,
      },
      {
        ingredient: "gruyère",
        quantity: 50,
        unit: "gr",
      },
    ],
    time: 45,
    description:
      "La veille cuire vos chouchoutes à la cocotte vapeur, les éplucher et les laisser s’égoutter car elles sont pleines d’eau. Confectionner un roux blanc avec la farine et le beurre, pour cela faite fondre le beurre puis ajouter la farine et laisser cuire, ajouter la crème et lait, cuire avec un fouet jusqu’à épaississement. Ajouter à votre béchamel deux jaunes d’œuf plus le gruyère afin d’obtenir une sauce Mornay. Rectifier l’assaisonnement.Hacher vos gousses d’ail et votre persil chinois. Mélanger le tout dans un plat.Passer au four pour gratiner.",
    appliance: "four",
    ustensils: ["plat a gratin", "cocotte", "econome"],
  },
  {
    id: 63,
    name: "Tarte au fruit de la Passion",
    altText: "Une délicieuse tarte au fruits de la passion.",
    servings: 8,
    ingredients: [
      {
        ingredient: "pâte brisée",
        quantity: 1,
      },
      {
        ingredient: "sucre",
        quantity: 120,
        unit: "gr",
      },
      {
        ingredient: "oeuf",
        quantity: 4,
      },
      {
        ingredient: "beurre",
        quantity: 60,
        unit: "gr",
      },
      {
        ingredient: "fruit de la passion",
      },
      {
        ingredient: "crème fraîche",
        quantity: 2,
        unit: "cuillère a soupe",
      },
    ],
    time: 50,
    description:
      "préchauffer le four à 200°C (thermostat 6-7)Battre les oeufs et le sucre en mousse.Ajouter le beurre fondu refroidi, le jus des maracudja et la crème fraîche. Bien mélanger pour avoir une bonne crème. Verser la crème sur la pâte à tarte étalée dans un moule. Faire cuire 30 min puis laisser reposer au frais environ 1 h 30. Servir frais.",
    appliance: "four",
    ustensils: ["moule a tarte", "saladier", "fouet"],
  },
  {
    id: 64,
    name: "Ambrevade au lait de coco",
    altText: "Une délicieuse tarte au fruits de la passion.",
    servings: 8,
    ingredients: [
      {
        ingredient: "lait de coco",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "ambrevade",
        quantity: 500,
        unit: "gr",
      },
      {
        ingredient: "oignon",
        quantity: 2,
      },
      {
        ingredient: "poivre en grains",
      },
      {
        ingredient: "sel",
      },
      {
        ingredient: "grains de safran",
      },
    ],
    time: 240,
    description:
      " Écosser les ambrevades. Les laisser dans l'eau toute une nuit les plonger dans de l'eau bouillante et les retirer lorsqu'ils sont mous Dans une sauteuse mettre le lait de coco,les oignons, le safran le poivre (écrasé ) et le sel porter à ébullition Y verser les ambrevades. Laisser réduire jusqu'à obtenir une sorte de purée.",
    appliance: "sauteuse",
    ustensils: ["cuillere en bois"],
  },
  {
    id: 65,
    name: "Ambrevade a l'antillaise",
    altText: "Un saladier d'ambrevade",
    servings: 4,
    ingredients: [
      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: "filet",
      },
      {
        ingredient: "ambrevade",
        quantity: 450,
        unit: "gr",
      },
      {
        ingredient: "oignon",
        quantity: 2,
      },
      {
        ingredient: "bouquet garni",
        quantity: 1,
      },
      {
        ingredient: "sel",
        quantity: 4,
        unit: "gr",
      },
      {
        ingredient: "melange 4 épices",
        quantity: 1,
        unit: "cuillere a café",
      },
      {
        ingredient: "sucre de canne roux",
        quantity: 2,
        unit: "cuillere a café",
      },
      {
        ingredient: "eau",
        quantity: 1.4,
        unit: "litre",
      },
      {
        ingredient: "ail",
        quantity: 2,
        unit: "gousse",
      },
      {
        ingredient: "persil",
        quantity: 5,
        unit: "feuille",
      },
    ],
    time: 135,
    description:
      " Mettez les pois dans une casserole et couvrez-les d'eau. Faites bouillir les pois 25 minutes dès démarrage de l'ébulition. Au terme de cette première cuisson, arrêtez le feu. Egouttez les pois. Mixer finement l'oignon. Dans une casserole, mettez un filet d'huile d'olive à chauffer er versez-y l'oignon. Faites revenir sans arriver à coloration. Ajoutez le mélange 4 épices, le sucre, et le melange bouquet garni. Incorporez les pois et faites revenir le tout pendant 5 minutes. Ajoutez le persil haché, l'ail et couvrez d'eau. Recouvrez la casserole. C'est parti pour 1h45 de cuisson à feu moyen. Aprés 1h30 environ, ajoutez le sel et rectifiez l'assaisonement à votre goût. Laissez en core cuire 15 minutes. Au terme de ce temps, Ambrevade sont prête à être deguster.",
    appliance: "casserole",
    ustensils: ["cuillere en bois"],
  },
  {
    id: 66,
    name: "pâte à crèpes facile",
    altText: "Des crêpes prêtent a être déguster",
    servings: 4,
    ingredients: [
      {
        ingredient: "farine",
        quantity: 250,
        unit: "gr",
      },
      {
        ingredient: "oeuf",
        quantity: 4,
      },
      {
        ingredient: "lait",
        quantity: 0.5,
        unit: "l",
      },

      {
        ingredient: "sel",
        quantity: 1,
        unit: "pincée",
      },
      {
        ingredient: "sucre",
        quantity: 2,
        unit: "cuillere à soupe",
      },
      {
        ingredient: "beurre fondu",
        quantity: 50,
        unit: "gr",
      },
    ],
    time: 25,
    description:
      "Mettez la farine dans un saladier avec le sel et le sucre. Faites un puits au milieu et versez-y les œufs. Commencez à mélanger doucement. Quand le mélange devient épais, ajoutez le lait froid petit à petit. Quand tout le lait est mélangé, la pâte doit être assez fluide. Si elle vous paraît trop épaisse, rajoutez un peu de lait. Ajoutez ensuite le beurre fondu refroidi, mélangez bien. Faites cuire les crêpes dans une poêle chaude (par précaution légèrement huilée si votre poêle à crêpes n'est pas anti-adhésive). Versez une petite louche de pâte dans la poêle, faites un mouvement de rotation pour répartir la pâte sur toute la surface. Posez sur le feu et quand le tour de la crêpe se colore en roux clair, il est temps de la retourner. Laissez cuire environ une minute de ce côté et la crêpe est prête. Répétez jusqu'à épuisement de la pâte. ",
    appliance: "poêle",
    ustensils: ["cuillere en bois", "saladier", "louche"],
  },
  {
    id: 67,
    name: "Pâte brisée rapide",
    altText: "Une pâte brisée prêtent à être garni",
    servings: 4,
    ingredients: [
      {
        ingredient: "farine",
        quantity: 300,
        unit: "gr",
      },

      {
        ingredient: "sel",
        quantity: 2,
        unit: "cuillere à café",
      },
      {
        ingredient: "sucre (si pâte sucrée)",
        quantity: 3,
        unit: "cuillere à soupe",
      },
      {
        ingredient: "eau",
        quantity: 8,
        unit: "cl",
      },

      {
        ingredient: "beurre pommade",
        quantity: 150,
        unit: "gr",
      },
    ],
    time: 45,
    description:
      "Mélanger la farine et le sel dans un plat (et le sucre si sucre il y a). Ajouter le beurre puis l'incorporer à la farine en pétrissant rapidement et légèrement du bout des doigts. On doit obtenir une sorte de semoule grossière en 2 ou 3 min. Incorporer rapidement le lait ou l'eau. Il en faut très peu pour permettre à la pâte de se lier et de faire boule. Le lait ou l'eau ? C'est selon les goûts.Pour étaler sans problème, étaler la pâte sur du papier cuisson et cuire tel quel dans la platine.",
    appliance: "plats",
    ustensils: ["rouleaux a pâtisserie", "saladier", "cuillere"],
  },
  {
    id: 68,
    name: "Pâte feuilletée rapide",
    altText: "Une pâte feuilletée tout juste sortie du four.",
    servings: 4,
    ingredients: [
      {
        ingredient: "farine",
        quantity: 250,
        unit: "gr",
      },

      {
        ingredient: "sel",
        quantity: 3,
        unit: "gr",
      },
      {
        ingredient: "sucre ",
        quantity: 4,
        unit: "cuillere à café",
      },
      {
        ingredient: "eau",
        quantity: 90,
        unit: "ml",
      },

      {
        ingredient: "beurre froid",
        quantity: 240,
        unit: "gr",
      },
    ],
    time: 30,
    description:
      "Dans le bol du robot, versez la farine, le beurre froid coupé en petits morceaux, le sel et le sucre en poudre. Mélangez les ingrédients avec la feuille. Ajoutez l'eau et, avec la feuille, mélangez les ingrédients pour obtenir une boule de pâte.Ne cherchez pas à incorporer le beurre complètement, il doit rester des morceaux apparents c'est ce qui permettra au feuilletage de se développer à la cuisson.Filmer le pâton au contact et réservez une heure au réfrigérateur. Ce temps de repos au froid peut être diminué à 30 minutes l'hiver, en fonction de la température de votre cuisine. Fleurez votre plan de travail et posez votre pâton de pâte feuilletée. Donnez lui une forme légèrement rectangulaire. Au rouleau, abaissez le pâton sur 60cm de longueur et 15cm de largeur Repliez le tiers supérieur de l'abaisse vers l'intérieur. Recouvrez avec le tiers inférieur.Tournez le pâton obtenu d'un quart de tour vers la droite. Vous venez de faire un tour simple. Faites en 4 supplémentaires en procédant de la même façon. Votre pâte feuilletée  est prête à être utilisée!",
    appliance: "plats",
    ustensils: ["rouleaux a pâtisserie", "robot", "papier cuisson"],
  },
  {
    id: 69,
    name: "poulet à la crème et champignons",
    altText: "Un délicieux plât de poulet a la créme et au champignons.",
    servings: 3,
    ingredients: [
      {
        ingredient: "ail",
        quantity: 1,
        unit: "gousse",
      },

      {
        ingredient: "champignons de Paris",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "farine",
        quantity: 1,
        unit: "cuillere à soupe",
      },
      {
        ingredient: "persil frais",
        quantity: 1,
        unit: "botte",
      },

      {
        ingredient: " poulet",
        quantity: 3,
        unit: "cuisse",
      },
      {
        ingredient: "oignon",
        quantity: 1,
      },
      {
        ingredient: "crème fraîche épaisse",
        quantity: 1,
        unit: "pot",
      },
      {
        ingredient: "fond de sauce volaille",
        quantity: 1,
        unit: "cube",
      },
    ],
    time: 70,
    description:
      "Couper les cuisses de poulet en 2. Les faire revenir dans l'huile pendant 20 min puis ajouter l'oignon émincé, l'ail écrasé, une bonne pincée de persil frais et une cuillère à soupe de fond de sauce volaille. Mélanger le tout et faire revenir jusqu'à ce que les oignons soient translucides. Ajouter la boîte de champignons avec le jus (très important) et la deuxième cuillère à soupe de fond de volaille et laisser cuire a couvert avec environ 50 cl d'eau pendant 10 min. A part, mélanger la crème et la farine. Verser dans la marmite avec vos ingrédients. Laisser mijoter environ 15 min, le temps que la sauce devienne bien onctueuse.",
    appliance: "marmitte",
    ustensils: ["bol", "fouet"],
  },
  {
    id: 70,
    name: "Crevettes sautée ail et persil",
    altText: "",
    servings: 4,
    ingredients: [
      {
        ingredient: "ail",
        quantity: 4,
        unit: "gousse",
      },

      {
        ingredient: "piment doux",
        quantity: 1,
      },

      {
        ingredient: "persil frais",
        quantity: 1,
        unit: "bouquet",
      },

      {
        ingredient: " huile d'olive",
        quantity: 6,
        unit: "cuillere a soupe",
      },
      {
        ingredient: "poivre",
      },
      {
        ingredient: "sel",
      },
      {
        ingredient: "crevette",
        quantity: 400,
        unit: "gr",
      },
    ],
    time: 25,
    description:
      "CLavez et essuyez les crevettes. Faites chauffer 4 cuillères à soupe d'huile dans 1 grande poêle. Ajoutez les crevettes et faites les cuire 5 mn de chaque côté puis sortez les de la poêle. Passez l'ail au mixeur, le persil et le piment doux. Dans la poêle, versez le reste de d'huile puis ajoutez l'ail, le persil et le piment. Remuez bien, pour que l'ail soit cuit mais non brûlé. Remettez les crevettes à chauffer. Salez, poivrez et servez chaud.",
    appliance: "poêle",
    ustensils: ["mixer"],
  },
  {
    id: 71,
    name: "Pancakes à la japonaise",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 4,
    ingredients: [
      {
        ingredient: "farine",
        quantity: 250,
        unit: "gr",
      },

      {
        ingredient: "beurre",
        quantity: 50,
        unit: "gr",
      },

      {
        ingredient: "Lait entier",
        quantity: 50,
        unit: "cl",
      },

      {
        ingredient: "sucre vanillé",
        quantity: 1,
        unit: "sachet",
      },
      {
        ingredient: "sucre",
        quantity: 75,
        unit: "gr",
      },
      {
        ingredient: "oeuf",
        quantity: 2,
      },
      {
        ingredient: "levure chimique",
        quantity: 3,
        unit: "cuillère à café",
      },
      {
        ingredient: "sel",
        quantity: 1,
        unit: "pincée",
      },
    ],
    time: 15,
    description:
      "Tamisez la farine et la levure dans un saladier. Ajoutez le sucre, le sucre vanillé et le sel. Creusez un puits, ajoutez les oeufs, le beurre fondu et un peu de lait puis travaillez la pâte. Mouillez progressivement avec le reste du lait jusqu'à ce que la pâte forme un ruban. Faites cuire les pancakes dans une petite poêle beurrée bien chaude. Versez une demi-louche de préparation et faites cuire 2 à 3 minutes le temps que des bulles se forment à la surface. Retournez et faites cuire 2 minutes sur l'autre face.",
    appliance: "poêle",
    ustensils: ["saladier", "louche"],
  },
  {
    id: 72,
    name: "Porc croustillants chinois",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 8,
    ingredients: [
      {
        ingredient: "poitrine de porc",
        quantity: 1.2,
        unit: "kg",
      },

      {
        ingredient: "vin Shaoxing ou saké",
        quantity: 4,
        unit: "cl",
      },

      {
        ingredient: "vinaigre de riz",
        quantity: 4,
        unit: "cl",
      },

      {
        ingredient: "sel",
      },
      {
        ingredient: "cinq épices chinois",
      },
      {
        ingredient: "gros sel",
        quantity: 1.5,
        unit: "kg",
      },
      {
        ingredient: "blanc d'oeuf",
        quantity: 2,
      },
      {
        ingredient: "vinnaigre",
        quantity: 7,
        unit: "cl",
      },
    ],
    time: 190,
    description:
      "Désosser et retirer les cartilages de la poitrine à l'aide d'un couteau à désosser.Perforer la couenne de la poitrine de porc sur toute la surface jusqu'à obtenir une multitude de petits trous rapprochés. Utiliser la pointe du couteau ou un attendrisseur à viande. Ces petits trous vont permettre à la graisse de remonter en surface, griller la couenne pour la rendre croustillante et provoquer les boursouflures caractéristiques. De la même manière, perforer de nombreux trous la chair pour permettre à la marinade de pénétrer et assaisonner la viande. Il est également possible d'entailler la chair sur toute la longueur tous les 2 ou 3 cm environ, sans découper la dernière couche de graisse ni la couenne. Asperger la chair avec de l'alcool de riz (Shaoxing, Saké...). Saler au sel fin et saupoudrer de cinq-épices. Frotter avec la main pour recouvrir toute la surface. Placer la poitrine dans un bac, peau vers le haut. Saler légèrement et masser pour faire pénétrer. Badigeonner la couenne au vinaigre de riz à l'aide d'un pinceau. Pour une chair assaisonnée à coeur, placer au réfrigérateur et laisser mariner pendant une nuit. Ne pas recouvrir pour permettre à la couenne de sécher. Préparer la pâte de sel : Préchauffer le four à 180°C chaleur tournante. Préparer la croûte de sel en mélangeant dans une calotte le gros sel, le vinaigre et les blancs d'oeuf à l'aide d'une spatule. On doit obtenir une pâte granuleuse qui reste bien amalgamée. Recouvrir une plaque à rôtir avec du papier aluminium. Étaler une couche de croûte de sel sur ~ 1 cm d'épaisseur, sur une surface légèrement supérieure à la poitrine. Placer la poitrine au centre, couenne vers le haut. Recouvrir de pâte de sel, y compris de chaque côté. Façonner pour souder les bords et obtenir une coque hermétique. Enfourner la plaque et cuire à 180°C pendant 90 min. Casser la croûte, sortir la poitrine et retirer tout le sel en frottant avec du papier absorbant. Nettoyer la plaque à rôtir et la recouvrir d'une nouvelle feuille de papier aluminium. Y placer la poitrine couenne vers le haut. Enfourner à nouveau et cuire à 180/190°C en position grill pendant environ 60 minutes supplémentaires ou jusqu'à obtenir de nombreuses boursouflures et un résultat parfaitement croustillant. La couenne doit émettre un bruit sourd et craquant lorsque l'on tape sur sa surface avec un ustensile.Découper couenne vers le bas en tranche et servez.      ",
    appliance: "poêle",
    ustensils: ["couteau à désosser", "spatule"],
  },
  {
    id: 73,
    name: "Sauce au poivre simple",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 8,
    ingredients: [
      {
        ingredient: "Farine",
        quantity: 30,
        unit: "gr",
      },

      {
        ingredient: "poivre",
      },

      {
        ingredient: "beurre",
        quantity: 40,
        unit: "gr",
      },

      {
        ingredient: "bouillon de boeuf",
        quantity: 1,
        unit: "cube",
      },

      {
        ingredient: "vinnaigre aromatisé",
        quantity: 1,
        unit: "cuilère a soupe",
      },
    ],
    time: 30,
    description:
      "Faire un roux avec le beurre et la farine.Ajouter 1/4 l d'eau en une seule fois et bien mélanger. Ajouter le cube de bouillon, une cuillerée à soupe de vinaigre et une cuillerée à café de poivre mignonette. Faire épaissir. Ajouter du sel si nécessaire (inutile en principe, à cause du bouillon). Au moment de servir, ajouter du poivre moulu : non, ça ne fait pas double emploi avec le poivre mignonette ! Allez-y molo quand même...  ",
    appliance: "casserole",
    ustensils: ["cuillère en bois"],
  },
  {
    id: 74,
    name: "pesto vert",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 4,
    ingredients: [
      {
        ingredient: "Parmesan",
        quantity: 2,
        unit: "cuillère à soupe",
      },

      {
        ingredient: "huile d'olive",
      },

      {
        ingredient: "ail",
        quantity: 2,
        unit: "gousse",
      },

      {
        ingredient: "basilic",
        quantity: 20,
        unit: "feuilles",
      },

      {
        ingredient: "pignon de pin",
        quantity: 2,
        unit: "cuilère a soupe",
      },
    ],
    time: 10,
    description:
      " Choisir de belles feuilles de basilic. Dans un mixer à herbes, ajouter les gousses d'ail dégermées et les pignons de pin. Ajouter les feuilles de basilic lavées. Ajouter un filet d'huile d'olive. Commencer à mixer par petites séquences. Ajouter le parmesan et mixer jusqu'à la consistance souhaitée. Mettre en pot et garder au réfrigérateur 3 à 4 jours maxi ou congeler en petites pastilles.",
    appliance: "mixer",
    ustensils: ["mortier", "pilon", "rape"],
  },
  {
    id: 75,
    name: "sauce gribiche",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 4,
    ingredients: [
      {
        ingredient: "jaune d'oeuf",
        quantity: 1,
      },

      {
        ingredient: "huile",
        quantity: 0.25,
        unit: "litre",
      },

      {
        ingredient: "moutarde",
        quantity: 1,
        unit: "cuillère a soupe",
      },

      {
        ingredient: "vinaigre",
        quantity: 1,
        unit: "cuillère a soupe",
      },

      {
        ingredient: "cornichons et câpres hachée   ",
        quantity: 2,
        unit: "cuilère a soupe",
      },
      {
        ingredient: "persil, cerfeuil et estragon hachés",
        quantity: 1,
        unit: "cuilère a soupe",
      },
      {
        ingredient: "julienne de blanc d'oeufs",
      },
      {
        ingredient: "sel et poivre.",
      },
    ],
    time: 20,
    description:
      " Monter une mayonnaise à la moutarde classique comme montré sur la vidéo. Assaisonner la mayonnaise obtenue avec sel et poivre. Ajouter les herbes aromatiques ciselées. Ajouter la cuiller de vinaigre pour la détendre et les cornichons émincés. Ajouter les câpres concassées. Et en dernier incorporer les blancs d'oeufs taillés fin. Servir bien frais et ne pas conserver plus de 24 heures au réfrigérateur. ",
    appliance: "Cul de poule",
    ustensils: ["Couteau de chef", "Fouet", "Planche à découper"],
  },
  {
    id: 76,
    name: "Sauce ravigote",
    altText: "Une assiette de pancakes à la japonaise.",
    servings: 4,
    ingredients: [
      {
        ingredient: "une échalote ciselée",
        quantity: 1,
      },

      {
        ingredient: "oignon nouveaux",
        quantity: 2,
      },

      {
        ingredient: "ciboulette",
      },
      {
        ingredient: "estragon",
      },
      {
        ingredient: "persil chinois",
      },

      {
        ingredient: "câpres hachées",
        quantity: 1,
        unit: "cuillère a soupe",
      },

      {
        ingredient: "vinaigrette",
      },
      {
        ingredient: "moutarde a l'ancienne",
        quantity: 1,
        unit: "cuilère a soupe",
      },

      {
        ingredient: "sel et poivre.",
      },
    ],
    time: 20,
    description:
      " Dans un récipient adapté, déposer la moutarde à l'ancienne. Ajouter le vinaigre de vin blanc. Assaisonner de sel et poivre du moulin. Ajouter l'huile en filet en fouettant. Ajouter les herbes ciselées, L'échalote et l'oignon ciselés,Les câpres concassés. Rectifier l'assaisonnement et mélanger.Dresser en saucière.  ",
    appliance: "Cul de poule",
    ustensils: ["Couteau de chef", "Fouet", "Planche à découper", "sauciere"],
  },
  {
    id: 77,
    name: "Flan de courgettes au jambon",
    altText: "Un délicieux plat de flan de courgettes au jambon.",
    servings: 4,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 500,
        unit: "gr",
      },

      {
        ingredient: "Oeuf",
        quantity: 4,
      },

      {
        ingredient: "lait",
        quantity: 1,
        unit: "verre",
      },
      {
        ingredient: "crème fraiche",
        quantity: 12,
        unit: "cl",
      },
      {
        ingredient: "gruyère rapé",
        quantity: 100,
        unit: "gr",
      },

      {
        ingredient: "Maîzena",
        quantity: 2,
        unit: "cuillère a soupe",
      },

      {
        ingredient: "jambon",
        quantity: 2,
        unit: "tranche",
      },

      {
        ingredient: "sel et poivre.",
      },
    ],
    time: 45,
    description:
      " Laver les courgettes, les couper en dés, les cuire à la vapeur (tendres mais fermes) et les égoutter.Délayer la maïzena dans le lait, ajouter la crème fraîche, les œufs battus, le jambon, le gruyère ou le parmesan. Saler, poivrer et incorporer les courgettes. Verser dans un plat à gratin beurré et cuire au four pendant 30 minutes à 210°C soit thermostat 7. Servir chaud.",
    appliance: "four",
    ustensils: ["Plat à gratin", "passoire"],
  },
  {
    id: 78,
    name: "Ratatouille",
    altText: "Un jolie plat de ratatouille prêt à être déguster.",
    servings: 4,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 2,
        unit: "unité",
      },
      {
        ingredient: "Aubergine",
        quantity: 1,
        unit: "unité",
      },

      {
        ingredient: "Poivron vert",
        quantity: 1,
        unit: "unité",
      },

      {
        ingredient: "poivron rouge",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "tomate",
        quantity: 3,
        unit: "unité",
      },
      {
        ingredient: "oignon",
        quantity: 1,
        unit: "unité",
      },

      {
        ingredient: "ail",
        quantity: 2,
        unit: "gousse",
      },

      {
        ingredient: "bouquet garnie",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "huile d'olive",
      },

      {
        ingredient: "sel et poivre",
      },
    ],
    time: 80,
    description:
      "Lavez et détaillez les courgettes, l'aubergine, le poivron vert et le rouge, en cubes de taille moyenne. Coupez les tomates en quartiers et émincez l'oignon. Dans une poêle, versez un peu d'huile d'olive et faites-y revenir les uns après les autres les différents légumes pendant 5 minutes pour qu'ils colorent. Commencez par les poivrons, puis les aubergines, les courgettes et enfin les oignons et les tomates que vous cuirez ensemble. Après avoir fait cuire les légumes, ajoutez-les tous aux tomates et aux oignons, baissez le feu puis mélangez. Ajoutez un beau bouquet garni de thym, de romarin et de laurier, salez, poivrez, puis couvrez pour laisser mijoter 40 minutes en remuant régulièrement. À environ 10 minutes du terme de la cuisson, ajoutez les deux belles gousses d'ail écrasées puis couvrez de nouveau. N'hésitez pas à goûter et à assaisonner de nouveau selon vos goûts. Dégustez avec des grillades ou un barbecue.",
    appliance: "cocotte",
    ustensils: ["Plat à gratin", "couteau"],
  },
  {
    id: 79,
    name: "Beignets aux courgettes",
    altText: "Une pile de  beignet de courgettes.",
    servings: 4,
    ingredients: [
      {
        ingredient: "Courgette",
        quantity: 4,
        unit: "unité",
      },
      {
        ingredient: "farine",
        quantity: 2,
        unit: "verre",
      },
      {
        ingredient: "eau",
        quantity: 1,
        unit: "verre",
      },

      {
        ingredient: "levure",
        quantity: 0.5,
        unit: "sachet",
      },

      {
        ingredient: "gousse d'ail mixer avec du persil",
        quantity: 3,
        unit: "unité",
      },
      {
        ingredient: "muscade",
      },
      {
        ingredient: "oeuf",
        quantity: 1,
        unit: "unité",
      },

      {
        ingredient: "huile de friture",
      },

      {
        ingredient: "sel et poivre",
      },
    ],
    time: 30,
    description:
      " Faire cuire les courgettes en rondelles à la vapeur pendant 20 mn environ. Dans un saladier mettre tous les autres ingrédients. Ecraser les courgettes avec une fourchette. Ajouter les courgettes dans le saladier et mélanger.  Faire chauffer l'huile puis y couler les beignets avec une cuillère.",
    appliance: "wook",
    ustensils: ["saladier", "cuiseur vapeur"],
  },
  {
    id: 80,
    name: "Croque monsieur d'aubergines",
    altText: "Une pile de  beignet de courgettes.",
    servings: 2,
    ingredients: [
      {
        ingredient: "Aubergine",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "Tomate",
        quantity: 2,
        unit: "unité",
      },
      {
        ingredient: "farine",
        quantity: 1,
        unit: "cuillère à dessert",
      },
      {
        ingredient: "herbe de provence",
      },
      {
        ingredient: "crème liquide",
        quantity: 10,
        unit: "cl",
      },

      {
        ingredient: "gruyère",
        quantity: 50,
        unit: "gr",
      },

      {
        ingredient: "sel et poivre",
      },
    ],
    time: 30,
    description:
      "Couper les aubergines en tranches de 1 cm d'épaisseur, dans le sens de la longueur. Mélanger la moutarde avec la crème dans un bol. Etalez cette prépération sur une face des aubergines. Faire des lamelles de fromage que vous placez sur les aubergines pour recouvrir toute la surface. Couper les tomates en tranches de 5 mm d'épaisseur. Mettre 1 ou 2 tranches de tomate sur les aubergines. Saupoudrez d'herbes de Provence. Passez au four à 180°C (themostat 6) pendant 30 mn (à voir en fait selon la cuisson désirée).",
    appliance: "four",
    ustensils: ["bol", "couteau"],
  },
  {
    id: 81,
    name: "Tarte salée au Boursin",
    altText: "Une belle part de tarte salée au Boursin.",
    servings: 2,
    ingredients: [
      {
        ingredient: "courgette",
        quantity: 3,
        unit: "unité",
      },
      {
        ingredient: "Tomate",
        quantity: 4,
        unit: "unité",
      },
      {
        ingredient: "pâte feuilletée",
        quantity: 1,
        unit: "rouleau",
      },
      {
        ingredient: "Boursin ail et fine herbes",
        quantity: 0.5,
        unit: "unité",
      },
      {
        ingredient: "boeuf hachée",
        quantity: 200,
        unit: "gr",
      },

      {
        ingredient: "gruyère râpé",
        quantity: 100,
        unit: "gr",
      },

      {
        ingredient: "crème fraîche",
        quantity: 15,
        unit: "cl",
      },
    ],
    time: 17,
    description:
      "Dans un premier temps faîtes revenir la viande hachée dans une sauteuse.Pendant ce temps lavez et épluchez les courgettes (laissez la moitié de la peau), ajoutez-les à la viande hachée en les coupant en petits morceaux. Faites de même avec les tomates en laissant la peau. Laissez cuire environ 15 minutes à couvert. Faites préchauffer votre four à 200°C (thermostat 6/7)et faîtes précuire quelques minutes la pâte préalablement étalée dans le plat à tarte. Pendant ce temps mettez dans un bol le demi Boursin, la crème fraiche et écrasez grossièrement le Boursin, ajoutez le tout dans la sauteuse et mélangez. Laissez 5 minutes sans couvrir en remuant de temps à autre. Sortez la pâte précuite et versez la préparation dans votre plat à tarte. ",
    appliance: "four",
    ustensils: ["bol", "plat à tarte", "sauteuse"],
  },
  {
    id: 82,
    name: "La tarte salée ensoleillée",
    altText: "Une tarte ensoleillée prête a être déguster.",
    servings: 2,
    ingredients: [
      {
        ingredient: "courgette",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "Tomate",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "pâte brisée",
        quantity: 1,
        unit: "rouleau",
      },
      {
        ingredient: "lait",
        quantity: 7,
        unit: "cl",
      },
      {
        ingredient: "poivre",
      },

      {
        ingredient: "sel",
      },

      {
        ingredient: "huile d'olive",
      },
      {
        ingredient: "herbes de provences",
      },
      {
        ingredient: "thon au naturel",
        quantity: 1,
        unit: "boite",
      },
      {
        ingredient: "oeuf",
        quantity: 2,
        unit: "unité",
      },
      {
        ingredient: "oignon",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "anchois",
        quantity: 5,
        unit: "filet",
      },
    ],
    time: 45,
    description:
      "Préchauffer le four à 200°C (thermostat 6-7). Mettre la pate brisée dans le plat à tarte, la piquer à l'aide d'une fourchette et la recouvrir de tranches de courgettes puis de tranches de tomate.Egoutter le thon et le mélanger aux oeufs et au lait. Incorporer l'oignon finement haché, les anchois écrasés, du sel, du poivre et des herbes de Provence. Verser cette préparation sur les légumes, arroser d'un filet d'huile d'olive et enfourner pour 30 minutes de cuisson. ",
    appliance: "four",
    ustensils: ["bol", "plat à tarte", "saladier"],
  },
  {
    id: 83,
    name: "Tarte à la citrouille salée",
    altText: "Une tarte a la citrouille salée très appetisante.",
    servings: 6,
    ingredients: [
      {
        ingredient: "citrouille",
        quantity: 500,
        unit: "gr",
      },
      {
        ingredient: "pâte brisée",
        quantity: 1,
        unit: "rouleau",
      },

      {
        ingredient: "poivre",
      },

      {
        ingredient: "sel",
      },

      {
        ingredient: "huile d'olive",
        quantity: 1,
        unit: "cuillère à soupe",
      },

      {
        ingredient: "crème epaisse",
        quantity: 25,
        unit: "cl",
      },
      {
        ingredient: "oeuf",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "oignon",
        quantity: 1,
        unit: "unité",
      },
    ],
    time: 55,
    description:
      "Faire cuire la citrouille dans de l'eau, une fois cuite égoutter les morceaux et les laisser refroidir un peu, puis les écraser grossièrement à la fourchette. Faire revenir, dans un fond d'huile, l'oignon coupé finement. Dès que l'oignon a légèrement caramélisé, y rajouter la citrouille. Saler et poivrer. Dans un saladier battre un oeuf et y ajouter la crème fraîche, et enfin la préparation oignon + citrouille.Répartir la préparation sur la pâte brisée.Enfourner pendant 25 min à 180°C (thermostat 6).",
    appliance: "four",
    ustensils: ["bol", "plat à tarte", "saladier"],
  },
  {
    id: 84,
    name: "Génoise inratable",
    altText: "Une tarte a la citrouille salée très appetisante.",
    servings: 6,
    ingredients: [
      {
        ingredient: "levure chimique",
        quantity: 0.5,
        unit: "sachet",
      },

      {
        ingredient: "farine T45",
        quantity: 125,
        unit: "gr",
      },
      {
        ingredient: "oeuf",
        quantity: 4,
        unit: "unité",
      },
      {
        ingredient: "sucre",
        quantity: 125,
        unit: "gr",
      },
    ],
    time: 30,
    description:
      "Pour réaliser cette recette, il faut avoir un robot qui permette d'ajouter des ingrédients au fur et à mesure sans devoir tout arrêter et ouvrir un couvercle à chaque fois. Le secret de la réussite de cette génoise, c'est la rapidité d'exécution. Préparez donc tout ce dont vous aurez besoin avant de vous lancer, beurrez le moule (j'ai utilisé un moule de 25 cm de diamètre) pesez les ingrédients. Préchauffez le four à 180° (th6). Mélangez la levure à la farine. Séparez les blancs des jaunes d'œufs, et montez les blancs en neige avec une pincée de sel. Quand ils sont fermes, ajoutez le sucre et battez encore. Baissez la vitesse du robot et ajoutez d'un coup les 4 jaunes, puis tout de suite la farine et la levure en pluie. Arrêtez très rapidement le robot pour que la préparation n'ait pas le temps de retomber, versez dans le moule, lissez la surface et enfournez immédiatement pour 20 minutes. Dans mon four à gaz, j'ai mis th. 4. Démoulez tiède et attendez que le gâteau soit refroidi pour le couper en deux et le garnir",
    appliance: "four",
    ustensils: ["robot", "moule", "spatule"],
  },
  {
    id: 85,
    name: "Gateau qui pleure au chocolat",
    altText: "Une tarte a la citrouille salée très appetisante.",
    servings: 6,
    ingredients: [
      {
        ingredient: "genoise",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "chantilly",
        quantity: 1,
        unit: "unité",
      },

      {
        ingredient: "chocolat noir",
        quantity: 200,
        unit: "gr (1 plaque)",
      },
      {
        ingredient: "crème liquide",
        quantity: 250,
        unit: "ml",
      },
    ],
    time: 60,
    description:
      "Préchauffez votre four à 180 degrés. Génoise : Tout d’abord commencer par beurrer le moule. Dans un saladier y déposer les oeuf, les 150g de sucre en poudre, fouetter le tout jusqu’à ce que le mélange devienne plus blanc et mousseux. Y ajoutez 200ml de lait et mélanger. Une fois mélangé, y ajouter 80ml d’huile, mélanger à nouveau, et ajouter ensuite le sucre vanillé. Tamiser ensuite 30g de cacao et l'ajouter à la préparation. Une fois le cacao bien incorporé au mélange, ajouter 190g de farine avec la levure chimique tout en la tamisant aussi pour éviter les grumeaux. Mélanger le tout jusqu’à obtenir une pâte lisse et homogène. Incorporer ensuite la préparation dans le moule et enfourner au four pendant 20 minutes à 180 degrés. Une fois le gâteau cuit, vous allez porter à ébullition 200ml de lait avec 15g de cacao. Ce mélange va servir pour imbiber le gâteau. Piquer le gâteau à l’aide d’un fourchette ensuite et verser votre mélange sur le gâteau une première fois. Attendre que le gâteau absorbe le mélange et répéter cette opération 4 fois. Ganache: Porter à ébullition les 250g de crème liquide en y rajoutant 200g de chocolat (noir ou au lait selon les goûts). Mélanger le tout jusqu’à ce que le chocolat se dilue complètement, laissez maintenant refroidir complètement votre ganache avant de la verser sur le gâteau. Une fois votre ganache totalement refroidie, la verser sur votre gâteau en la répartissant bien partout.Ajouter  ensuite de la chantilly sur votre gâteau. Bien étaler la chantilly à l’aide d’une spatule pour que se soit bien lisse. Ensuite placer votre gâteau au frais. Placer maintenant votre gâteau au frigo pendant 4h minimum avant de servir.",
    appliance: "four",
    ustensils: ["casserole", "moule", "spatule"],
  },
  {
    id: 86,
    name: "crème chantilly",
    altText: "Un ramequin de chantilly maisons",
    servings: 6,
    ingredients: [
      {
        ingredient: "sucre glace",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "créme fraiche liquide (non allégée)",
        quantity: 50,
        unit: "cl",
      },
    ],
    time: 5,
    description:
      "Ne sortir la crème fraîche qu'au moment de faire la Chantilly. Verser la crème dans un saladier. Ajouter le sucre glace.Battre la crème à l'aide d'un fouet électrique. Changer de vitesse (du plus lent au plus rapide) progressivement, toutes les 30 secondes environ.Laisser reposer au réfrigérateur 2 heures au minimum. Ne sortir qu'au moment de servir. Servir de préférence à l'aide d'une poche à douille (qui permet de donner une jolie apparence 'striée' à la crème).",
    appliance: "batteur",
    ustensils: ["cul de poule"],
  },
  {
    id: 87,
    name: "Milkshake aux biscuits Oreo",
    altText: "Un ramequin de chantilly maisons",
    servings: 4,
    ingredients: [
      {
        ingredient: "biscuit Oréo",
        quantity: 12,
        unit: "unité",
      },
      {
        ingredient: "glace vanille",
        quantity: 6,
        unit: "boule",
      },
    ],
    time: 5,
    description:
      "Écrasez grossièrement,4 biscuits Oréos. Réservez. Mixez le lait, les boules de glace à la vanille et les 8 autres biscuits Oréos dans un blender.Versez dans les verres. Parsemez avec les biscuits Oréos écrasés.Dégustez sans attendre. ",
    appliance: "blender",
    ustensils: ["verres"],
  },
  {
    id: 88,
    name: "Sucettes de pastèque glacées",
    altText: "Un ramequin de chantilly maisons",
    servings: 10,
    ingredients: [
      {
        ingredient: "pastéque",
        quantity: 1,
        unit: "unité",
      },
    ],
    time: 10,
    description:
      "Coupez la pastèque en deux, puis coupez chaque moitié en tranches épaisses d’1 cm environ. Détaillez chaque tranche en parts triangulaires.Entaillez la peau de chaque part avec un petit couteau et plantez-y un bâtonnet de glace en bois.Placez une nuit au réfrigérateur. ",
    appliance: "réfrigérateur",
    ustensils: ["battonet en bois"],
  },
  {
    id: 89,
    name: "Smoothie concombre et pastèque",
    altText: "Un ramequin de chantilly maisons",
    servings: 1,
    ingredients: [
      {
        ingredient: "concombre",
        quantity: 1,
        unit: "unité",
      },
      {
        ingredient: "pastéque",
        quantity: 0.5,
        unit: "unité",
      },
      {
        ingredient: "citron vert",
        quantity: 0.5,
        unit: "unité",
      },
      {
        ingredient: "miel",
        quantity: 1,
        unit: "cuilère à soupe",
      },
    ],
    time: 5,
    description:
      "Retirez la peau et les graines de la pastèque puis épluchez le concombre et pressez le jus du citron. Dans un blender, mixez la pastèque, le concombre, le jus de citron et le miel avec 4 glaçons.Servez frais.",
    appliance: "blender",
    ustensils: ["verres"],
  },
];
