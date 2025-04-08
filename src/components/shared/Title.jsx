import {Helmet} from 'react-helmet-async'

const Title = ({title="Chattr",description="This is chat App"}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default Title