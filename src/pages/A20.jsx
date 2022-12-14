import React, { useEffect, useState }  from 'react'
import styled from 'styled-components'

const Container = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 20px;
 padding: 5px;
`
const Wrapper = styled.div`
 display: flex;
 flex-direction: row;
 gap: 15px;
 font-size: 15px;
 flex-wrap: wrap;
 width:500px;
 justify-content: center;
 align-items: center;
`
const H1 = styled.h1`
 
`
const H3 = styled.h2`
 margin-top: 0px;
 margin-bottom: 0px;
 text-decoration: underline;
`
const Table = styled.table`
 border: 2px gray solid;
 border-collapse: collapse;
`
const Tr = styled.tr`
`
const Td = styled.td`
 border: 2px gray solid;
 padding: 5px;
 width:15px;
 height:15px;
 text-align: center;
`

function A20() {

    const [puzzle, setPuzzle] = useState([]);

    const fetchData = () => {
        return fetch("http://localhost:5000/api/v1/a20/models")
            .then((response) => response.json())
            .then((data) => {
                console.log("in")
                setPuzzle(data)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchData();
    },[])

  return (
    <Container>
        <H3>Level 1</H3>
        <Wrapper>
            {
                puzzle.map((model) =>{
                    return(
                        <Table>
                            <Tr> <Td>{model.c1}</Td> <Td>{model.c2}</Td> <Td>{model.c3}</Td> <Td>{model.c4}</Td> <Td>{model.c5}</Td> </Tr>
                            <Tr> <Td>{model.c6}</Td> <Td>{model.c7}</Td> <Td>{model.c8}</Td> <Td>{model.c9}</Td> <Td>{model.c10}</Td> </Tr>
                            <Tr> <Td>{model.c11}</Td> <Td>{model.c12}</Td> <Td>{model.c13}</Td> <Td>{model.c14}</Td> <Td>{model.c15}</Td> </Tr>
                            <Tr> <Td>{model.c16}</Td> <Td>{model.c17}</Td> <Td>{model.c18}</Td> <Td>{model.c19}</Td> <Td>{model.c20}</Td> </Tr>
                            <Tr> <Td>{model.c21}</Td> <Td>{model.c22}</Td> <Td>{model.c23}</Td> <Td>{model.c24}</Td> <Td>{model.c25}</Td> </Tr>
                        </Table>
                    );
                })
            }
        
        </Wrapper>

    </Container>
  )
}

export default A20