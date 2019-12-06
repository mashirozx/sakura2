<?php
add_action( 'graphql_register_types', 'register_pet_types' );

function register_pet_types() {
    register_graphql_object_type( 'Dog', [
      'description' => __( "Man's best friend", 'your-textdomain' ),
      'fields' => [
        'name' => [
            'type' => 'String',
            'description' => __( 'The name of the dog', 'your-textdomain' ),
        ],
        'breed' => [
            'type' => 'String',
            'description' => __( 'The Breed of the dog', 'your-textdomain' ),
        ],
        'age' => [
            'type' => 'Integer',
            'description' => __( 'The age, in years, of the dog', 'your-textdomain' ),
        ],
      ],
    ] );

    register_graphql_object_type( 'Cat', [
      'description' => __( "Not man's best friend...", 'your-textdomain' ),
      'fields' => [
        'name' => [
            'type' => 'String',
            'description' => __( 'The name of the cat', 'your-textdomain' ),
        ],
        'age' => [
            'type' => 'Integer',
            'description' => __( 'The age, in years, of the cat', 'your-textdomain' ),
        ],
        'isHighOnCatnip' => [
          'type' => 'Boolean',
          'description' => __( 'Whether the cat is high on Catnip.', 'your-textdomain' ),
        ]
      ],
    ] );
}

register_graphql_union_type( 'PetUnion', [
  'types'       => [
    \\WPGraphQL\\TypeRegistry::get_type( 'Dog' ),
    \\WPGraphQL\\TypeRegistry::get_type( 'Cat' )
  ],
  'resolveType' => function( $pet ) {
    // Here we receive the object or array that's being resolved by the field
    // and we can determine what Type to return
    $type = null;
    switch( $pet['type'] ) {
      case 'dog':
        $type = \\WPGraphQL\\TypeRegistry::get_type( 'Dog' );
        break;
      case 'cat':
        $type = \\WPGraphQL\\TypeRegistry::get_type( 'Dog' );
        break;
    }
    return $type;
  }
] );

add_action( 'graphql_register_types', function() {

  register_graphql_field( 'RootQuery', 'myPets', [
     'description' => __( 'My pets (could be dogs or cats)', 'your-textdomain' ),
     'type' => [ 'list_of' => 'PetUnion' ],
     'resolve' => function() {
         // You would probably get data from a database or remote API here, but we're
         // just going to return hard coded data
         $pets = [
           [
             'type' => 'dog',
             'name' => 'Bender',
             'age' => 3,
             'breed' => 'Golden Retriever',
           ],
           [
             'type' => 'cat',
             'name' => 'Speckles',
             'age' => 2,
             'isHighOnCatnip' => true,
           ],
         ];
 
         return $pets;
     }
  ] );
 });