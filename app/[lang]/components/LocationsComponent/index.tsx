import { ActivationCard, Box } from 'gestalt';

import './locationComponent.scss';

export default function LocationsComponents({title, message, statusMessage, component}: any) {

  function splitTextByCapitalLetter(input: string): string {
    let lines = '';
    if (input.match('ШОУРУМ:')) {
      lines = input.replaceAll('ШОУРУМ:', '\n ШОУРУМ:');
      return lines;
    } else if (input.match('Станислав Саламанов - управител автосервиз')) {
      lines = input.replaceAll('Станислав Саламанов - управител автосервиз', '\n Станислав Саламанов - управител автосервиз');
      return lines;
    } else {
      return input;
    }
  }

  return (
    <Box
      alignItems="center"
      display="flex"
      height="100%"
      justifyContent="center"
      width="100%"
    >
      <ActivationCard
        link={{
          label: component,
          accessibilityLabel: '',
        }}
        message={splitTextByCapitalLetter(message)}
        statusMessage={statusMessage}
        title={title}
      />
    </Box>
  );
}