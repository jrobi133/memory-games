import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(() => ({

  appBar: {
    borderRadius: 15,
    marginTop: '75px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  // background: {
  //   backgroundImage: `url('../../images/mapBackgroud.png')`,
  //   minHeight: '100vh',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundSize: 'cover',

  // },
}));
