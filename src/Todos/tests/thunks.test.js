import 'node-fetch';
import fetchMock from 'fetch-mock';
import {expect} from 'chai'; 
import {fetchTodos} from '../thunk';
import {
    fetchTodoInProgress, 
    fetchTodoSuccess
} from '../actions';
import sinon from 'sinon';

describe('The fetchTodos thunk', ()=>{
    it('Dispatches the correct actions in the success scenario',async ()=>{
        const fakeDispatch = sinon.spy();

        const fakeTodos = [{text:'1'},{text:'2'}];
        fetchMock.get('http://localhost:8080/todos',fakeTodos);

        const expectedFirstAction = fetchTodoInProgress();  
        const expectedSecondAction = fetchTodoSuccess();  
        expectedSecondAction.payload.todos=fakeTodos;

        await fetchTodos()(fakeDispatch);
        
        expect(fakeDispatch.getCall(0).args[0]).to.deep.equal(expectedFirstAction);
        expect(fakeDispatch.getCall(1).args[0]).to.deep.equal(expectedSecondAction);

        fetchMock.reset();
    })
});