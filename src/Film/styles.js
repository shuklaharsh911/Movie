import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    width: 300,
    height: 280,
    paddingTop: '56.25%', 
    objectFit: 'cover',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'space-between',
  },
}));