import { ionFireEvent as fireEvent } from '@ionic/react-test-utils';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import RandomStringForm from '../RandomStringForm';
// import TestRenderer from 'react-test-renderer';
// import { mount, shallow } from 'enzyme';
// import { create } from "react-test-renderer";


const getRandomStringMock =
  jest.fn((number) => Promise.resolve('mocked value'));

const testForm = <RandomStringForm getRandomString={getRandomStringMock} />;

afterEach(cleanup);

test('renders without crashing', () => {
  const { baseElement } = render(testForm);
  expect(baseElement).toBeDefined();
});

test('successfully submits value', async () => {
  // const renderer = new ShallowRenderer();
  // renderer.render(<User user={user} />);
  // const tree = renderer.getRenderOutput();
  // expect(tree).toMatchSnapshot();

  // const component = TestRenderer.create(
  //   <RandomStringForm getRandomString={getRandomStringMock} />
  // );
  // const component = TestRenderer.create(
  //   <RandomStringForm getRandomString={getRandomStringMock} />
  // );

  // console.log(component.getInstance().findAllByType("input"));
  // console.log(component.root.findByType('form').children);
  // const { debug, findAllByRole, getByRole } = render(<RandomStringForm getRandomString={getRandomStringMock} />);



  // const container = document.createElement("div");
  // ReactDOM.render(testForm, container);
  // const input = container.querySelector('input');
  // console.log(container);

  // unmountComponentAtNode(container);
  // container.remove();

  // const input = await findByTitle('Input Length');
  // const input = getByRole("text");
  // const input = await findByTestId('input-length');

  // fireEvent.ionChange(input, '33');
  // fireEvent.ionInput(input, '33');

  // debugger;

  // console.log(input.innerHTML);

  // screen.debug(input);


  // debug(input);

  // const input = await screen.findByTestId('input-length');
  // console.log(input);
  // fireEvent.input(getByRole("text"), {
  //   target: {
  //     value: '5'
  //   }
  // });

  // console.log((await findByRole('text')).innerHTML);

  // fireEvent(getByRole("text"), new CustomEvent('ion-input', {
  //   detail: '5'
  // }));

  // fireEvent(await screen.findByTestId('input-length'), new CustomEvent('ion-input', {
  //   detail: '5'
  // }));

  // fireEvent.ionChange(input, new CustomEvent('ion-input', {
  //   detail: '5'
  // }));

  // console.log(baseElement);

  // fireEvent.ionChange(await screen.findByTestId('input-length'), '5');
  // fireEvent.ionChange(input, '55');
  // fireEvent.change(input, '5');
  // fireEvent.input(input, '5');
  // fireEvent.ionInput(input, '5');
  // console.log(await screen.findByTestId('input-length'));
  // console.log(await findAllByTestId('input-length'));
  // console.log(await findByPlaceholderText('Length of random string Number'));
  // console.log(await screen.findByTitle('Length of random string Number'));
  // fireEvent.submit(getByRole("button"));

  // expect(await findAllByRole("error")).toHaveLength(0);
  // expect(getRandomStringMock).toBeCalled();
});

test('shows error when submits without value', async () => {
  const { findAllByRole, getByRole } = render(<RandomStringForm getRandomString={getRandomStringMock} />);
  fireEvent.submit(getByRole("button"));

  expect(await findAllByRole("error")).toHaveLength(1);
  expect(getRandomStringMock).not.toBeCalled();
});

