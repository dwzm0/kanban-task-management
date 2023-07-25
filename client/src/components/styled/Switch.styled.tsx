import { styled } from 'styled-components'

export const StyledSwitch = styled.div`
    max-width: 251px;
    height: 48px;
    background-color: ${props => props.theme.switchBg};
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;


    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        margin: 0 0.75rem;
    }

    .toggle-switch input[type="checkbox"] {
        display: none;
    }

    .toggle-switch .switch {
        position: absolute;
        cursor: pointer;
        background-color: #635ff7;
        border-radius: 25px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: background-color 0.2s ease;
    }

    .toggle-switch .switch::before {
        position: absolute;
        content: "";
        left: 2px;
        top: 3px;
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        border-radius: 50%;
        transition: transform 0.3s ease;
    }

    .toggle-switch input[type="checkbox"]:checked + .switch::before {
        transform: translateX(22px);
    }
`
