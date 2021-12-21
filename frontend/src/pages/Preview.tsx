interface Props {
    title: string
}

export const Option: React.FC<Props> = ({ title }) => (
    <h2>Hello user: {title} !</h2>
)
