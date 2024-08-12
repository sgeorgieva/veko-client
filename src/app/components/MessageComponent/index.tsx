import { DefaultLabelProvider, Flex, Toast } from "gestalt";

export default function Message({ type, message }: string) {
  return (
    <DefaultLabelProvider
      labels={{
        Toast: {
          accessibilityDismissButtonLabel: "Den Toast verwerfen",
          accessibilityIconSuccessLabel: "Erfolgsmeldung",
          accessibilityIconErrorLabel: "Fehlermeldung",
          accessibilityProcessingLabel: "Nachricht bearbeiten",
        },
      }}
    >
      <Flex
        alignItems="center"
        height="100%"
        justifyContent="center"
        width="100%"
      >
        <Toast
          dismissButton={{ onDismiss: () => {} }}
          text={message}
          type={type}
        />
      </Flex>
    </DefaultLabelProvider>
  );
}
