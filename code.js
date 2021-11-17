<script src="https://preview.babylonjs.com/babylon.js"></script>

/*
M4 = {posi: {0:[0,0,0], 1:[1,0,1], 2:[0,1,1], 3:[-1,0,1], 4:[0,-1,1], 5:[0,0,2]},
//"vcol": {0:red,...,5:blue},
//"ecol": {0:{1:red,2:red,3:0,4:0}, 1:{5:0}, 2:{5:0}, 3:{5:0}, 4:{5:0},5:{}},
ucov: {0:[1,2,3,4], 1:[5], 2:[5], 3:[5], 4:[5],5:[]}} //upper covers
*/
Lattice2Babylon = function(L) {
	var sphereList = [];
	var myPath;
	var tube;
	var j;
	for (i in L.posi){
		var sphere = BABYLON.Mesh.CreateSphere("sphere", 10, .1, scene); 
		sphere.position = new BABYLON.Vector3(L.posi[i][0], L.posi[i][1], L.posi[i][2]); 
		sphere.material = new BABYLON.StandardMaterial("sphere material",scene);
	}

	for(i in L.ucov){
		for(k in L.ucov[i]){
			j = L.ucov[i][k];
			myPath = [ new BABYLON.Vector3(L.posi[i][0], L.posi[i][1], L.posi[i][2]) , new BABYLON.Vector3(L.posi[j][0], L.posi[j][1], L.posi[j][2])];
			console.log(L.posi[i],L.posi[j]);
			tube = BABYLON.MeshBuilder.CreateTube("tube", {path: myPath, radius: 0.01, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true}, scene);
		}
	}

	// add a loop over vcol to make vertex colors.

}

Lattice2Mesh = function(L) {


}

/*
L1 = {ucov: {0:[1,2,3,4], 2:[6], 1:[5], 3:[7], 4:[7], 5:[7], 6:[7], 7:[]}}

L2 = {ucov: {0:[1,2,3,4], 1:[7], 2:[7], 3:[5], 4:[6], 5:[7], 6:[7], 7:[]}}

L1 is isomorphic to L2 but not equal.
*/