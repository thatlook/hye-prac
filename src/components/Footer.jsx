import styled from 'styled-components'

const Footer = () => {
  return (
    <CustomFooter>
      I'm footer
    </CustomFooter>
  )
}

export default Footer

const CustomFooter = styled.div`
background-color: gray;
color: white;
padding: 24px;
position: fixed;
bottom: 0;
width: 100%;
`
