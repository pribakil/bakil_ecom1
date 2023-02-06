import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import Products from "../components/Products"
import { mobile } from "../responsive"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
    ${mobile({ display:"flex", flexDirection:"column"})}
`
const FilterText = styled.span`
    font-style: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight:"0px"})}
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin:"10px 0px"})}
`
const Option = styled.option`
    
`
 
const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e)=>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    }

    const handleSort = (e)=>{
        setSort(e.target.value);
    }

  return (
    
    <Container>
        <Navbar />
        <Announcement />
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products</FilterText>
                <Select name="color" onChange={handleFilters}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option value="while">White</Option>
                    <Option value="black">Black</Option>
                    <Option value="red">Red</Option>
                    <Option value="blue">Blue</Option>
                    <Option value="yellow">Yellow</Option>
                    <Option value="green">Green</Option>
                </Select>
                <Select name="size" onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option value="xs">XS</Option>
                    <Option value="s">S</Option>
                    <Option value="m">M</Option>
                    <Option value="l">L</Option>
                    <Option value="xl">XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products</FilterText>
                <Select onChange={handleSort}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc">Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList