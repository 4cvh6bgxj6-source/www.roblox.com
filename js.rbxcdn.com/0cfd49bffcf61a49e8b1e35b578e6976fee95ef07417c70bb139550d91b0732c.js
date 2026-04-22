var Roblox = Roblox || {};
Roblox.LangDynamicDefault = Roblox.LangDynamicDefault || {};
Roblox.LangDynamicDefault["Feature.BiometricChallenge"] = {
  "Title.ConfirmHuman": "Confirm you're human",
  "Content.LivenessHostedPrompt":
    "Open your external browser and take a quick selfie to confirm you're human.",
  "Action.Continue": "Continue",
  "Action.Cancel": "Cancel",
  "Content.Loading": "Loading...",
};
window.Roblox &&
  window.Roblox.BundleDetector &&
  window.Roblox.BundleDetector.bundleDetected(
    "DynamicLocalizationResourceScript_Feature.BiometricChallenge"
  );
