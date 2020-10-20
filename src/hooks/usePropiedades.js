import { graphql, useStaticQuery } from 'gatsby'

const usePropiedades = () => {
  const propiedades = useStaticQuery(graphql
    ` query{
        allStrapiPropiedades{
          nodes{
            nombre
            descripcion
            id
            wc
            precio
            estacionamientos
            habitaciones
            categorias{
              Nombre
            }
            agentes{
              nombre
              telefono
              email
            }
            imagen{
              sharp:childImageSharp{
                fluid(maxWidth:600, maxHeight:400){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }`
  );
  return propiedades.allStrapiPropiedades.nodes.map(propiedad=>({
    nombre:propiedad.nombre,
    descripcion:propiedad.descripcion,
    id:propiedad.id,
    wc:propiedad.wc,
    precio:propiedad.precio,
    estacionamientos:propiedad.estacionamientos,
    habitaciones:propiedad.habitaciones,
    categorias:propiedad.categorias,
    imagen: propiedad.imagen 

  }))
}


export default usePropiedades;
