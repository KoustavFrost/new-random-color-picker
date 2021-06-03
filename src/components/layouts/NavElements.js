import styled from 'styled-components';

export const Header = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0.75rem 0;
    // background-color: #7952b3;
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
    margin-right: auto;
    margin-left: auto;
`;

export const NavText = styled.label`
    font-size: 1.5rem;
    font-weight: 500;
`;



// export const Nav = styled.nav`
//     // background: #e01638;
//     height: 5rem;
//     display: flex;
//     justify-content: space-between;
//     padding: 0.2rem calc((100vw - 1000px) / 2);
//     z-index: 12;
// `;

// export const NavLink = styled.span`
//     color: #000000;
//     display: flex;
//     align-item: center;
//     text-decoration: none;
//     padding: 0 1rem;
//     height: 100%;
// `;

// export const NavMenu = styled.div`
//     display: flex;
//     align-items: center;
//     margin-right: -24px;
//     @media screen and (max-width: 768px) {
//         display: none;
//     }
// `;