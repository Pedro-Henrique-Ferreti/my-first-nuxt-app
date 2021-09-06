export default function (context) {
  if (process.client) {
    context.store.dispatch('auth/initAuth');
  }
}