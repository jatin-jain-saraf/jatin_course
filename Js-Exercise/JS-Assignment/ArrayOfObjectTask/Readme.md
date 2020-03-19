Task
 	
create a static array of objects which returns all the child objects when input is given as id and if the id is not found then output should be ‘Not Found’. Tree view for array of objects is like :

[{
	id: 1,
	child: [
		{
			id: 11,
	 		child: [
				{	
					id: 111,
					child: []
				},
				{
					id: 112,
					child: [
						{
							id: 1121,
							child: []
						}]
				}]
		},
		{
			id: 12,
			child: []
		}]

}]

Then create it in dynamic form such that when id’s are not in a proper sequence and in random form then too it should work and child objects of that id should be printed.

