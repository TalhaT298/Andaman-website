
export const UseEmailContent = (passengers, seat) => {
  return passengers?.map((passenger, index) => {
    const seatContent = seat ? `\nSeat: ${seat[index]}` : '';
    return `Title: ${passenger?.title}
  Name: ${passenger?.name}
  Gender: ${passenger?.gender}
  Age: ${passenger?.age}
  Nationality: ${passenger?.nationality}
  ${seatContent}`
  }).join('\n\n');
};

export const UseContactContent = (contacts) => {
  return contacts?.map(contact => {
    return ` Name: ${contact?.name}
  email: ${contact?.email}
  phone: ${contact?.phone}
  alternative-phone: ${contact?.altPhone}`;
  }).join('\n\n');
};
// export  UseEmailContent;