<!DOCTYPE html>
<html lang="en">
<head>
	@include('layouts.core._head')

	@include('layouts.core._script_vars')

	@yield('head')

	@if (getThemeMode(Auth::user()->admin->theme_mode, request()->session()->get('admin-auto-theme-mode')) == 'dark')
		<meta name="theme-color" content="{{ getThemeColor(
			Auth::user()->admin->getColorScheme(),
			request()->session()->get('admin-auto-theme-mode')
		) }}">
	@elseif (Auth::user()->admin->getMenuLayout() == 'left')
		<meta name="theme-color" content="#eff3f5">
	@endif

	<script>
		@if (Auth::user()->admin->theme_mode == 'auto')
			var ECHARTS_THEME = isDarkMode() ? 'dark' : null

			// auto detect dark-mode
			$(function() {
				autoDetechDarkMode('{{ action('Admin\AccountController@saveAutoThemeMode') }}');
			});
		@else
			var ECHARTS_THEME = '{{ Auth::user()->admin->theme_mode == 'dark' ? 'dark' : null }}';
		@endif
	</script>
</head>
<body class="theme-white leftbar- fullscreen-search-box mode-light leftbar">
	@include('layouts.core._menu_backend')

	@include('layouts.core._middle_bar')

	<main class="container page-container px-3">
		@include('layouts.core._headbar_backend')
		
		@yield('page_header')

		<!-- display flash message -->
		@include('layouts.core._errors')

		<!-- main inner content -->
		@yield('content')

		<!-- Footer -->
	</main>

	<!-- Notification -->
	@include('layouts.core._notify')

	<!-- display flash message -->
	@include('layouts.core._flash')

	{!! \Acelle\Model\Setting::get('custom_script') !!}
</body>
</html>