



M4={posi: {0:[0,0,0], 1:[1,0,1], 2:[0,1,1], 3:[-1,0,1], 4:[0,-1,1], 5:[0,0,2]}
	vcol: {0:red,...,5:blue},
	ecol: {0:{1:red,2:red,3:0,4:0}, 1:{5:0}, 2:{5:0}, 3:{5:0}, 4:{5:0},5:{}},
	ucov: {0:[1,2,3,4], 1:[5], 2:[5], 3:[5], 4:[5],5:[]}} //upper covers





var sphereList = new list([]);
var myPath = new list([]);

Lattice2Babylon = function(L) {
	for (let key in L) {  //key = posi,...
		//let value = L[key];

		if( key == "posi"){// for the positions
			for (let subKey in L[key]){// subKey = 0,1,2,...
				var sphere = BABYLON.Mesh.CreateSphere("sphere1", 10, .1, scene); //creating a new sphere
				// L[key] = the whole first dictionary,
				// L[key][subKey] = first position list
				sphere.position = new BABYLON.Vector3(L[key][subKey][0], L[key][subKey][1], L[key][subKey][2]); //setting the dimensions
				sphere.material = new BABYLON.StandardMaterial("sphere material",scene)
				list.add(sphere);// can find spheres by list[0] would be point 0
			}
		}

		if( key == "ucov"){// for the path of the tube
			for (let subKey in L[key]){

				mayPath.add([L["posi"][subKey][0], L["posi"][subKey][1], L["posi"][subKey][2]]) // we add the positions to the list

			}
		}	
	}
}

Lattice2Mesh = function(L) {


}


L1 = {ucov: {0:[1,2,3,4], 2:[6], 1:[5], 3:[7], 4:[7], 5:[7], 6:[7], 7:[]}}

L2 = {ucov: {0:[1,2,3,4], 1:[7], 2:[7], 3:[5], 4:[6], 5:[7], 6:[7], 7:[]}}

L1 is isomorphic to L2 but not equal.
