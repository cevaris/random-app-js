import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import WordSearch from '../components/WordSearch';
import { RootState } from '../store';

const mapStateToProps = (state: RootState) => ({
    wordSearchText: state.wordSearch.wordSearchText
});

const mapDispatchToProps = {
    setSearchText: (text: string | undefined) => { }
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(WordSearch)
);

export type Props = RouteComponentProps<{}> & typeof mapDispatchToProps & ReturnType<typeof mapStateToProps>;

export type State = {
    wordSearchText: string;
}
