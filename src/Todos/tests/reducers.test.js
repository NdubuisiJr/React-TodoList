import {expect} from 'chai';
import {createTodo} from '../actions';
import {dataContext} from '../reducers';

describe('The dataContext reduceer', ()=>{

    it('Adds a new todo when todo is created', ()=>{
        const fakeTodo = {text:'fake todo added',isCompleted:false};
        const action = createTodo();
        action.payload.todo = fakeTodo;

        const fakeOriginalStake = {isLoading:false, todos:[]};
        const expected = {
            isLoading:false,
            todos:[fakeTodo]
        };

        const actual = dataContext(fakeOriginalStake,action);

        expect(actual).to.deep.equal(expected);
    });
});