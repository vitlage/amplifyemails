@extends('layouts.core.backend')

@section('title', trans('messages.create_customer'))
	
@section('page_header')
	
			<div class="page-title">
				<ul class="breadcrumb breadcrumb-caret position-right">
					<li class="breadcrumb-item"><a href="{{ action("Admin\HomeController@index") }}">{{ trans('messages.home') }}</a></li>
					<li class="breadcrumb-item"><a href="{{ action("Admin\CustomerController@index") }}">{{ trans('messages.customers') }}</a></li>
				</ul>
				<h1>
					<span class="text-semibold"><span class="material-icons-round">
add
</span> {{ trans('messages.create_customer') }}</span>
				</h1>
			</div>

@endsection

@section('content')
<div class="custom-box1">

	
	<form enctype="multipart/form-data" action="{{ action('Admin\CustomerController@store') }}" method="POST" class="form-validate-jqueryz">
					{{ csrf_field() }}
					
					@include('admin.customers._form')			
					
					<form>
						
</div>
@endsection
