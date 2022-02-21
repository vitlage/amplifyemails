<!DOCTYPE html>
<html lang="en">
    <head>
        @include('layouts.core._head')

        @include('layouts.core._script_vars')
    </head>
    <body class="bg-slate-800">
        <!-- Page container -->
        <div class="page-container login-container">
            @if (\Auth::check())
                <div class="text-end">
                    <a href="{{ url("/logout") }}"  class='text-white ml-20'><i class="icon-switch2"></i> {{ trans('messages.logout') }}</a>
                </div>
            @endif

            <!-- Page content -->
            <div class="page-content">

                <!-- Main content -->
                <div class="content-wrapper">
                    <div class="row mt-5">
                        <div class="col-sm-2 col-md-5 col-lg-4 mt-5 mobile-set1">
                            @yield('content')
                        </div>
                        <div class="col-sm-8 col-md-7 col-lg-8 mobile-set2">

                            <div class="text-center login-header">
                                <img src="{{ URL::asset('assets/login.svg') }}" class="login-image" alt="">
                                <a class="main-logo-big" href="{{ action('HomeController@index') }}">
                                    @if (\Acelle\Model\Setting::get('site_logo_big'))
                                        <img src="{{ action('SettingController@file', \Acelle\Model\Setting::get('site_logo_big')) }}" alt="">
                                    @else
                                    @endif
                                </a>
                            </div>

                            

                        </div>
                    </div>
                </div>
                <!-- /main content -->

            </div>
            <!-- /page content -->


            <!-- Footer -->
            <div class="small">
                <div class="footer text-white text-center py-3" style="width: 100%">
                    {!! trans('messages.copy_right_light') !!}
                </div>
            </div>
            <!-- /footer -->

        </div>
        <!-- /page container -->

        {!! \Acelle\Model\Setting::get('custom_script') !!}

    </body>
</html>