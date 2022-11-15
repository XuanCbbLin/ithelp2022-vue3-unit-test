import { describe, it, expect } from 'vitest'
import { add } from './practice-02'

describe('add()', () => {
  // happy path
  it('add(1, 1) 結果為 2', () => {
    expect(add(1, 1)).toBe(2)
  })

  it("add('1', '1') 結果為 2", () => {
    expect(add('1', '1')).toBe(2)
  })

  it('add(0.1, 0.2) 結果為 0.3', () => {
    expect(add(0.1, 0.2)).toBe(0.3)
  })

  // sad path
  it("add('1', '1') 結果不能為 '11'", () => {
    expect(add('1', '1')).not.toBe(11)
  })
})
