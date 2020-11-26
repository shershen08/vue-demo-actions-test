// Import the `mount()` method from Vue Test Utils
import { mount } from '@vue/test-utils'
import App from '../App.vue'
// import sinon from 'sinon'

// The component to test
// const MessageComponent = {
//   template: '<p>{{ msg }}</p>',
//   props: ['msg']
// }

test('basic things', async () => {
  // mount() returns a wrapped Vue component we can interact with
  const c = mount(App, {
    propsData: {
        intro: 'Hello world'
    }
  })

  // 1 - initail render - Assert the rendered text of the component
  expect(c.text()).toContain('good evening')
  expect(c.text()).toContain('hey HTML')

  // 2 - component methods
  expect(App.methods.add2(2)).toEqual(4)

  // 3 - events
  const button = c.find('button.this-is-always-there')
  await button.trigger('click')
  expect(c.vm.someServerHTML).not.toContain('hey HTML')

  // ..and events
  expect(c.emitted().changeValue).toBeTruthy();

  // const spy = sinon.spy()
})

test('change props', async () => {
    const wrapper = mount(App, {
        propsData: {
            intro: 'Hello world'
        }
      })

      //4  - change props
      expect(wrapper.text()).toContain('Hello world')


      expect(wrapper.vm.intro).toBe('Hello world')
      
    //   await wrapper.setData({ intro: 'bye' })
    //   expect(wrapper.text()).toContain('bye')

    const mainInput = wrapper.find('#main-input')

      //5 - detect visibility 
      expect(mainInput.isVisible()).toBe(true)
    })
