const useTest = () => {
  const test = ref('Test 1')
  const changeTest = () => {
    test.value = 'Test 2'
  }
  return {
    changeTest,
    test
  }
}

export default useTest
