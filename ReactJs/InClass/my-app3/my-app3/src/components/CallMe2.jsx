function CallMe2() {
    const [phoneNumber, setPhoneNumber] = useState();
    const [currentNumber, setCurrentNumber] = useState();
    const phoneInputRef = useRef();
    const handleClick = () => {
        setPhoneNumber(currentNumber);
    };
    const placeCall = useCallback(()=>{
        if (phoneNumber) {
            console.log(`dialing ${phoneNumber}`);
          }
    }, [phoneNumber]);
    
    useEffect(()=>{
        placeCall(phoneNumber);
    }, [[phoneNumber, placeCall]]);
    return (
        <>
          <label>Enter the number to call:</label>
          <input
            type="phone"
            ref={phoneInputRef}
            onChange={() => {
              setCurrentNumber(phoneInputRef.current.value);
            }}
          />
          <button onClick={handleClick}>Place Call</button>
          <h1>{currentNumber}</h1>
        </>
      );
}
export default CallMe2