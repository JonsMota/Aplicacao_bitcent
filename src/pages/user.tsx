import Header from "@/components/templates/Header"
import Page from "@/components/templates/Page"
import Content from "@/components/templates/Content"
import PageTitle from "@/components/templates/PageTitle"
import { IconForms } from "@tabler/icons-react"
import falseUser from "@/data/constants/falseUser"
import Forms from "@/components/user/Forms"


export default function UserRegister() {

    return (
        <Page>
            <Header />
            <Content>
                <PageTitle 
                    icon={<IconForms />}
                    title="Dados Cadastrais"
                    subtitle={`Informações de ${falseUser.email}`}
                />
               <Forms />
            </Content>
        </Page>
    )
}