import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';

describe("Test the login button",()=>{
    test("sign in button present ??",async()=> {
        render(<LoginPage/>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1); 
    })
    test('should fail EMAIL validation', () => { 
        const testEmail = "rakesh.com";
        const regexForEMail = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        expect(regexForEMail(testEmail)).toBe(true)
        // expect(regexForEMail(testEmail)).not.toBe(true)

     })
})