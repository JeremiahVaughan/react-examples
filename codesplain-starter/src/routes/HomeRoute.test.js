import {render, screen} from '@testing-library/react'
import {MemoryRouter} from "react-router";
import HomeRoute from './HomeRoute';
import {createServer} from "../test/server";

createServer([{
    path: '/api/repositories',
    method: 'get',
    res: (req) => {
        const language = req.url.searchParams.get('q').split('language:')[1]
        return {
            items: [
                {
                    id: 1, full_name: `${language}_1`
                },
                {
                    id: 2, full_name: `${language}_2`
                }
            ]

        }
    }
}])

it('renders two links for each language', async () => {
    render(<MemoryRouter>
        <HomeRoute/>
    </MemoryRouter>)

    const languages = ['javascript', 'typescript', 'rust', 'go', 'python', 'java']

    for (const language of languages) {
        const links = await screen.findAllByRole('link', {
            name: new RegExp(`${language}_`)
        })
        expect(links).toHaveLength(2)
        for (const link of links) {
            let linkText = `${language}_${links.indexOf(link) + 1}`;
            expect(link).toHaveTextContent(linkText)
            expect(link).toHaveAttribute('href', `/repositories/${linkText}`)
        }
    }
})


