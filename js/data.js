/* Dados do cardápio: categorias, itens, preços, códigos e mapa de fotos. */
// categoria: [id, nome, emoji, matiz]; sub: [nome, emoji, prefixo, itens "nome|descrição|preço" (preço/un opcional)]
const C=[
["cafes","Cafés","☕",28,[["Cafés e pães","☕","",`Café expresso curto||7.5
Café expresso longo||9.5
Café puro ou com leite||5.5
Chocolate grande||13.5
Chocolate pequeno||7.5
Copo de leite grande||8.5
Copo de leite pequeno||6.5
Pão com manteiga||5.5
Pão com manteiga e requeijão||8.5
Pão com manteiga na chapa||5.5
Pão de leite com manteiga||6
Pão de queijo com requeijão||10.5
Pingado||8.5`]]],
["pratos","Pratos","🍽️",18,[
["Todos os dias","🍽️","Arroz, feijão, ",`Bisteca|bisteca e salada|26
Calabresa|calabresa fatiada e salada|26
Contra a cavalo|contra filé, ovo frito e salada|33
Contra filé|contra filé e salada|31
Filé de frango|filé de frango e salada|26
Milanesa|fritas, à milanesa de frango ou carne|32
Omelete|omelete e salada|26
Parmegiana|fritas, à parmegiana de frango ou carne|34`],
["Segunda","🥓","Arroz, feijão, ",`Virado à paulista|banana, torresmo, couve, bisteca ou linguiça|33`],
["Terça","🥩","Arroz, feijão, ",`Bife à role|purê de batata e bife|33
Picadinho|carne cozida com legumes e salada|27`],
["Quarta","🍲","Arroz, feijão, ",`Costela com mandioca|costela, mandioca e salada|27
Feijoada|farofa, torresmo, couve e molho de pimenta|36
Feijoada grande|farofa, torresmo, couve, molho de pimenta e bisteca|60
Feijoada light|farofa, torresmo, couve, molho de pimenta e bisteca|70
Feijoada média|farofa, torresmo, couve, molho de pimenta e bisteca|`],
["Quinta","🍗","Arroz, feijão, ",`Frango ao molho com legumes|frango, molho com legumes e salada|27
Frango assado com batata|frango assado, batata e salada|27
Panqueca|panqueca, salada ou fritas|29
Pernil|pernil e salada|32`],
["Sexta","🐟","Arroz, feijão, ",`Almôndegas|salada e almôndegas|32
Cupim assado|cupim assado e salada|32
Peixe ao molho|peixe cozido ao molho, batata e salada|32
Peixe empanado|peixe empanado e purê|32
Pernil|pernil e salada|32`],
["Sábado","🍲","Arroz, feijão, ",`Comercial frango assado|frango assado e salada|27
Feijoada|farofa, couve e molho de pimenta|36
Feijoada grande|farofa, torresmo, couve, molho de pimenta e bisteca|60
Feijoada light|farofa, torresmo, couve, molho de pimenta e bisteca|70
Feijoada média|farofa, torresmo, couve, molho de pimenta e bisteca|
Frango assado|!Frango assado com 4 pães fatiados|52
Milanesa|fritas, milanesa de frango ou carne|32`],
["Adicional","🍚","",`Almôndegas||13
Arroz||8
Bife à role||13
Calabresa||11
Contra filé||15
Costela com mandioca||13
Cupim||15
Feijão||8
Filé de frango||11
Fritas||14
Macarrão||10
Milanesa (carne/frango)||20
Omelete||17
Ovo||3.5
Panqueca||13
Parmegiana (carne/frango)||23
Pedaço de frango||15
Peixe||13
Pernil||13
Picadinho||13
Salada, maionese ou legumes||8
Torresmo||8`]]],
["porcoes","Porções","🍗",8,[["Porções","🍗","",`Calabresa|Calabresa, cebola, maionese e pão fatiado|41
Contra filé|Contra filé acebolado, cebola, vinagrete, maionese e pão fatiado|56
Filé de frango|Filé de frango, salada, cebola, maionese e pão fatiado|41
Fritas grande||33
Fritas pequena||20
Mista|Contra filé, filé de frango, calabresa, cebola, vinagrete, maionese e pão fatiado|59
Mista de frios|Queijo, mortadela, salame e pão fatiado|50
Mortadela|Mortadela e pão fatiado|35
Queijo|Queijo e pão fatiado|40
Salame|Salame e pão fatiado|50`]]],
["lanches","Lanches","🥪",36,[
["Lanches","🥪","",`Americano|Pão francês, queijo, presunto, ovo, tomate e alface|21
Bauru|Pão francês, queijo, presunto, tomate e orégano|18
Misto quente|Pão francês, queijo e presunto|16
Mortadela Ceratti|Pão francês e mortadela Ceratti|18
Mortadela Ceratti c/ queijo|Pão francês, mortadela Ceratti e queijo mussarela|20
Natural|Pão francês, peito de peru, queijo fresco, alface e tomate|22
Pernil|Pão francês e pernil|20
Pernil com queijo|Pão francês, pernil e queijo|22
Pernil com queijo e vinagrete|Pão francês, pernil, queijo e vinagrete|24
Queijo branco|Pão francês, queijo fresco e orégano|19
Queijo branco c/ salada|Pão francês, queijo fresco, alface, tomate e orégano|21
Queijo provolone|Pão francês e queijo provolone|20
Queijo quente|Pão francês e queijo prato|16`],
["Churrasco","🥩","",`Recheio extra||3
Calabresa com queijo e salada||21
Calabresa com queijo ou salada||19
Calabresa simples||17
Churrasco com queijo||21
Churrasco com queijo e salada||23
Churrasco com salada||21
Churrasco simples||20
Filé de frango com queijo||18
Filé de frango com queijo e salada||20
Filé de frango com salada||18
Filé de frango simples||16
Mortadela Ouro com queijo e vinagrete||17
Mortadela Ouro com queijo ou vinagrete||15
Mortadela Ouro simples||12
Pão com ovo e queijo||13
Pão com ovo e salada||12
Pão com ovo, queijo e salada||15
Pão com ovo simples||10
Salame com queijo||22
Salame simples||20`],
["Beirute","🥙","",`Beirute Calabresa|Calabresa, bacon, ovo, queijo, presunto, cebola e salada|38
Beirute Carne|Contra filé, bacon, ovo, queijo, presunto e salada|39
Beirute Frango|Filé de frango, bacon, ovo, queijo, presunto, milho e salada|36
Beirute Misto|Filé de frango, calabresa, vinagrete, bacon, ovo, queijo, presunto, cebola e salada|46`],
["Hambúrgueres","🍔","",`X Bacon|Pão de hambúrguer, hambúrguer, queijo e bacon|21
X Bacon com ovo|Pão de hambúrguer, hambúrguer, queijo, bacon e ovo|23
X Big Burguer|Pão de hambúrguer, 2 hambúrgueres, queijo, tomate, maionese e salada|20
X Burguer|Pão de hambúrguer, hambúrguer e queijo|17
X Egg|Pão de hambúrguer, hambúrguer, queijo e ovo|21
X Salada|Pão de hambúrguer, hambúrguer, queijo e salada|19
X Tudo|Pão de hambúrguer, hambúrguer, queijo, presunto, bacon e ovo|26`],
["Tapioca","🫓","",`Tapioca com manteiga||10
Tapioca com mussarela||14.9
Tapioca com ovo||12.9
Tapioca com presunto e queijo||15.9
Tapioca com queijo branco||18`],
["Omelete","🍳","",`Omelete 1|2 ovos batidos com sal|17
Omelete 2|2 ovos, presunto, queijo, tomate e orégano|18
Omelete 3|2 ovos, peito de peru, queijo e tomate|19
Omelete 4|2 ovos, queijo branco e tomate|22`]]],
["caldos","Caldos","🍵",95,[["Caldos","🍵","",`Legumes|Batata, cebola, legumes, frango desfiado e cheiro verde|17
Mandioca|Mandioca, cebola, carne desfiada, pimentão e cheiro verde|17
Mandioquinha|Mandioquinha, cebola, carne seca e cheiro verde|17
Verde|Batata, cebola, couve, linguiça e cheiro verde|17`]]],
["pizzas","Pizzas","🍕",8,[["Pizzas","🍕","",`3 Queijos|Mussarela, provolone, queijo prato, tomate, orégano e azeitona|55
4 Queijos|Mussarela, prato, provolone e catupiry|55
Atum|Atum, mussarela, cebola e azeitona|50
Baiana|Calabresa moída, cebola, ovo, mussarela e pimenta|50
Bauru|Presunto, queijo, molho de tomate e orégano|50
Calabresa|Calabresa, cebola e azeitona|45
Especial da Casa|Bacon, mussarela, presunto, ervilha e cebola|55
Frango|Frango desfiado, catupiry, molho de tomate e azeitona|50
Marguerita|Mussarela, molho de tomate e orégano|50
Mussarela|Mussarela, orégano e azeitona|45
Portuguesa|Presunto, mussarela, ovo, ervilha e milho|50
Toscana|Calabresa, cebola e mussarela|50`]]],
["bebidas","Bebidas","🥤",200,[
["Água","💧","",`Água 1,5 L|1,5 L|5.5
Água com gás|500 ml|5
Água sem gás|500 ml|4`],
["Sucos","🧃","",`Suco lata Sufresh||8.5
Suco Sufresh|1 L|15.9
Iogurte com leite||11
Limonada suíça||15.9
Polpa com água||11.9
Polpa com laranja||18
Polpa com leite||14.9
Suco detox||16.9
Suco natural||16
Suco natural com leite||16
Suco natural One|900 ml|14.9
Suco natural One|300 ml|7.5
Vitamina||15.9`],
["Refrigerantes","🥤","",`Coca-Cola|2 L|16.9
Dolly|2 L|8.9
Fanta|2 L|13.9
Guaraná|2 L|13.9
Refrigerante 1 L|1 L|11.5
Refrigerante 600 ml|600 ml|9.5
Refrigerante 200 ml|200 ml|4
Refrigerante lata||8`],
["Cerveja lata","🍺","",`Antártica|350 ml|8
Brahma|350 ml|8
Brahma Zero|350 ml|9
Heineken|350 ml|9
Latão|550 ml|9
Skol|350 ml|8
Spaten|350 ml|9`],
["Long neck","🍻","",`Brahma Malzbier|355 ml|11.9
Corona|355 ml|11.9
Heineken|355 ml|11.9
Itaipava|355 ml|11.9
Itaipava Malzbier|355 ml|11.9
Itaipava Zero|355 ml|11.9
Petra|355 ml|11.9
Skol|355 ml|11.9
Spaten|355 ml|11.9`],
["Litrão","🍺","",`Amstel|Litrão|13
Antarctica|Litrão|11.5
Brahma|Litrão|13.5
Brahma Puro Malte|Litrão|12.5
Budweiser|Litrão|16.9
Eisenbahn|Litrão|12.9
Heineken|Litrão|16.9
Itaipava|Litrão|11
Original|Litrão|14
Petra|Litrão|12.5
Skol|Litrão|13.5
Spaten|Litrão|14`],
["Variados","🥥","",`Água de coco||6.5
Bebida láctea Nescau||8.5
Energético 269 ml|269 ml|15.9
Energético 473 ml|473 ml|15.9
Energético Redbull||15.9
Guaraviton||7.5
Skol Beats|313 ml|11.9
Smirnoff Ice||11.9`]]],
["festas","Festas","🍰",330,[
["Mini doces","🍬","",`Beijinho|100 unidades|150
Brigadeiro|100 unidades|150
Cajuzinho|100 unidades|150
Carolina|100 unidades|150
Sonho|100 unidades|150`],
["Mini salgados","🥟","",`Bolinho de queijo|100 unidades|150
Coxinha|100 unidades|150
Croissant|100 unidades|50
Empada|100 unidades|150
Esfihas|100 unidades|150`],
["Sanduíches de metro","🥖","",`Atum|Atum temperado, cenoura ralada, alface, tomate e maionese|100
Frango|Frango desfiado, catupiry, alface, tomate e maionese|110
Mortadela|Mortadela fatiada, queijo prato, alface, tomate e maionese|100
Mussarela|Mussarela, tomate seco, alface, tomate e maionese|100
Peito de peru|Peito de peru, queijo minas, alface, tomate e maionese|100
Presunto|Presunto Sadia, queijo prato, alface, tomate e maionese|100
Salame|Salame italiano, queijo provolone, alface, tomate e maionese|100
Salpicão|Frango desfiado, cenoura ralada, azeitona, cheiro verde, pimentão, milho, alface e maionese|100
Três queijos|Queijo prato, queijo minas, queijo provolone, alface, tomate e maionese|100`],
["Bolo","🎂","",`Bolo confeitado|Vários sabores – sob encomenda|79.9/kg`]]]
];
const EM={"🍞":"squares-four","☕":"coffee","🍽️":"fork-knife","🍗":"bowl-food","🥪":"bread","🍵":"bowl-steam","🍕":"pizza","🥤":"beer-bottle","🍰":"cake","🥓":"bowl-food","🥩":"knife","🍲":"cooking-pot","🐟":"fish","🍚":"grains","🍔":"hamburger","🥙":"cheese","🫓":"grains","🍳":"egg-crack","💧":"drop","🧃":"orange-slice","🍺":"beer-stein","🍻":"beer-bottle","🥥":"lightning","🍬":"cookie","🥟":"popcorn","🥖":"bread","🎂":"cake"};
