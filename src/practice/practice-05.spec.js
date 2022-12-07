import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import component from './practice-05.vue'

describe('開戶', () => {
  it('若已有開過戶頭應在狀態顯示欄（Ａ）顯示 您已開過戶頭囉。', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('xuan')

    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('開戶完成。')
  })

  it('若交易成功，且該名稱未開過戶頭應在狀態顯示欄（Ａ）顯示 開戶完成。', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_account"]').setValue('apple')
    await wrapper.find('[data-test="button_open-account"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('開戶完成。')
  })
})

describe('存款', () => {
  it('若查詢不到戶頭應在狀態顯示欄（Ａ）顯示 查詢不到該用戶，請重新確認。', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_deposit"]').setValue('xuan')
    await wrapper.find('[data-test="input_deposit"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('查詢不到該用戶，請重新確認。')
  })

  it('若交易成功，應在狀態顯示欄（Ａ）顯示 存款完成，戶頭目前餘額 {該用戶的乾乾數量}', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_deposit"]').setValue('apple')
    await wrapper.find('[data-test="input_deposit"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('存款完成，戶頭目前餘額 ')
  })
})

describe('提領', () => {
  it('若查詢不到戶頭應在狀態顯示欄（Ａ）顯示 查詢不到該用戶，請重新確認。', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_withdraw"]').setValue('xuan')
    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('查詢不到該用戶，請重新確認。')
  })

  it('若交易成功，提領金額足夠應在狀態顯示欄（Ａ）顯示 存款完成，戶頭目前餘額 {該用戶的乾乾數量}', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_withdraw"]').setValue('xuan')
    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('存款完成，戶頭目前餘額 ')
  })

  it('若交易成功，餘額不足提領金額應在狀態顯示欄（Ａ）顯示 餘額不足，你帳戶目前餘額為 {該用戶的乾乾數量}', async () => {
    const wrapper = mount(component)

    await wrapper.find('[data-test="input_withdraw"]').setValue('xuan')
    await wrapper.find('[data-test="button_withdraw"]').trigger('click')

    expect(wrapper.find('[data-test="status"]').text()).toBe('餘額不足，你帳戶目前餘額為 100')
  })
})
